
  export interface Food {
    id: number;
    description: string;
    energy_kcal: number | null;
  }
  export interface Activity {
    id: number;
    description: string;
    calories_burned: number;
  }

  export type RootStackParamList = {
    Dashboard: undefined;
    GetUserInfo: undefined;
    ConfirmCatalogScreen: undefined;
    AddActivity: { activity: Activity }; 
    Resumo: { caloriesBurned: number };  
  };