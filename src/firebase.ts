import { initializeApp } from 'firebase/app';

import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword
} from 'firebase/auth';

import {
  getFirestore,
  setDoc,
  doc,
  updateDoc,
  getDocs,
  collection,
  getDoc
} from 'firebase/firestore';
import { MyGroupType, MyTypeWithout } from './components/Workout/Workout.types';

const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_APP_ID
};

const app = initializeApp(firebaseConfig);
const db = getFirestore();
const auth = getAuth(app);

const getCollection = async (email: string, title: string) => {
  const docSnap: any = await getDoc(doc(db, email.toLocaleLowerCase(), title));
  const arr: MyTypeWithout[] = [];
  docSnap.data().exercises.forEach((element: MyTypeWithout) => {
    arr.push(element);
  });
  return arr;
};

const getArrExercise = async (email: string) => {
  const querySnapshot: any = await getDocs(
    collection(db, email.toLocaleLowerCase())
  );
  const arr: MyTypeWithout[] = [];
  querySnapshot.forEach((doc: any) => {
    arr.push(doc.data().exercises);
  });
  return arr.flat();
};

const addNewExersice = async (email: string, e: MyTypeWithout) => {
  const { title, duration, description, select } = e;
  const docSnap: any = await getDoc(
    doc(db, email.toLocaleLowerCase(), String(select))
  );
  const arr: MyTypeWithout[] = [];
  docSnap.data().exercises.forEach((element: MyTypeWithout) => {
    arr.push(element);
  });
  arr.push({
    id: String(Date.now()),
    title,
    duration,
    description,
    done: false
  });
  if (select) {
    await setDoc(doc(db, email, select), { exercises: arr });
  }
};

const addExersices = async (
  email: string,
  arr: {
    title: string;
    exercises: MyGroupType;
    muscle_group: {
      name: string;
      photo: string;
    };
  }[]
) => {
  arr.forEach(
    (item: {
      title: string;
      exercises: MyGroupType;
      muscle_group: {
        name: string;
        photo: string;
      };
    }) => {
      addExersice(email, item, item.title);
    }
  );
};

const addExersice = async (
  email: string,
  e: {
    title: string;
    exercises: MyGroupType;
    muscle_group: { name: string; photo: string };
  },
  titles: string
) => {
  const { exercises } = e;
  const docSnap = await getDoc(doc(db, email.toLowerCase(), titles));
  if (docSnap.exists()) {
    return;
  }
  await setDoc(doc(db, email.toLocaleLowerCase(), titles), {
    exercises
  });
};

const changeDone: (
  email: string,
  e: MyTypeWithout,
  title?: string | undefined
) => Promise<undefined> = async (
  email: string,
  e: MyTypeWithout,
  title = 'Exercise'
) => {
  const docSnapExercise: any = await getDoc(doc(db, email, title));
  const arr: MyTypeWithout[] = [];
  docSnapExercise.data().exercises.forEach((element: MyTypeWithout) => {
    arr.push(element);
  });

  if (arr.map((item: MyTypeWithout) => item.id).includes(e.id)) {
    await updateDoc(doc(db, email.toLowerCase(), title), {
      exercises: arr.map((item) => {
        if (item.id === e.id) {
          return { ...item, done: true };
        }
        return item;
      })
    });
    return;
  }
  if (title === 'Stretching') {
    return changeDone(email, e, 'Warm up');
  }
  return changeDone(email, e, 'Stretching');
};

const signup = (email: string, password: string) => {
  return createUserWithEmailAndPassword(auth, email, password);
};
const login = async (email: string, password: string) => {
  return signInWithEmailAndPassword(auth, email, password);
};

export {
  getArrExercise,
  auth,
  addExersices,
  getCollection,
  addExersice,
  signup,
  login,
  addNewExersice,
  changeDone
};
