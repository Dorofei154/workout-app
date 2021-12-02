export interface MyType {
  id: number;
  photo: string;
  title: string;
  duration: number;
  description: string;
  video: string;
}

export interface ExercisesWithDone extends MyType {
  done: boolean;
}

interface MyGroupType {
  [x: string]: any;
  [index: number]: MyType;
}

export interface GroupExercises {
  title: string;
  exercises: MyGroupType;
  muscle_group: {
    name: string;
    photo: string;
  };
}

export interface IProps {
  location: {
    state: {
      exersice: {
        title: string;
        exercises: MyGroupType;
        muscle_group: {
          name: string;
          photo: string;
        };
      };
      stretching: {
        title: string;
        exercises: MyGroupType;
        muscle_group: {
          name: string;
          photo: string;
        };
      };
      warmUp: {
        title: string;
        exercises: MyGroupType;
        muscle_group: {
          name: string;
          photo: string;
        };
      };
    };
  };
}
