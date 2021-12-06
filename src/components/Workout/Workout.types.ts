export interface MyType {
  id: number;
  photo: string;
  title: string;
  duration: number;
  description: string;
  video: string;
}

export interface MyTypeWithout {
  id?: string;
  done?: boolean;
  title: string;
  duration: number;
  description: string;
  select?: string | undefined;
  video?: string;
  photo?: string;
}

export interface ExercisesWithDone extends MyType {
  done: boolean;
}

export interface MyGroupType {
  [x: string]: MyType;
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
