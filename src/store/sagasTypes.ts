export interface Exersices {
  id: number;
  photo: string;
  title: string;
  duration: number;
  description: string;
  video: string;
}

interface MyGroupType {
  [x: string]: any;
  [index: number]: Exersices;
}

export interface SagasProps {
  data: {
    questions: [
      {
        title: string;
        exercises: MyGroupType;
        muscle_group: {
          name: string;
          photo: string;
        };
      },
      {
        title: string;
        exercises: MyGroupType;
        muscle_group: {
          name: string;
          photo: string;
        };
      },
      {
        title: string;
        exercises: MyGroupType;
        muscle_group: {
          name: string;
          photo: string;
        };
      }
    ];
  };
}

export interface IProps {
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
}
