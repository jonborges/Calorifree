import React, { createContext, useState, useContext, ReactNode } from 'react';

interface Food {
  id: number;
  description: string;
  energy_kcal: number | null;
}

interface Activity {
  id: number;
  description: string;
  calories_burned: number; 
}

interface AppContextProps {
  foods: Food[];
  activities: Activity[];
  weight: number | null;
  height: number | null;
  goal: 'gain' | 'maintain' | 'lose';
  age: number | null;
  sex: 'male' | 'female' | null;
  addFood: (food: Food) => void;
  removeFood: (foodId: number) => void;
  addActivity: (activity: Activity) => void;
  removeActivity: (activityId: number) => void;
  setWeight: (weight: number) => void;
  setHeight: (height: number) => void;
  setGoal: (goal: 'gain' | 'maintain' | 'lose') => void;
  setAge: (age: number) => void;
  setSex: (sex: 'male' | 'female') => void;
}

interface AppProviderProps {
  children: ReactNode;
}

const AppContext = createContext<AppContextProps | undefined>(undefined);

export const AppProvider: React.FC<AppProviderProps> = ({ children }) => {
  const [foods, setFoods] = useState<Food[]>([]);
  const [activities, setActivities] = useState<Activity[]>([]);
  const [weight, setWeight] = useState<number | null>(null);
  const [height, setHeight] = useState<number | null>(null);
  const [goal, setGoal] = useState<'gain' | 'maintain' | 'lose'>('maintain');
  const [age, setAge] = useState<number | null>(null);
  const [sex, setSex] = useState<'male' | 'female' | null>(null);


  const addFood = (food: Food) => {
    setFoods((prevFoods) => [...prevFoods, food]);
  };

  const removeFood = (foodId: number) => {
    setFoods((prevFoods) => prevFoods.filter((food) => food.id !== foodId));
  };

 
  const addActivity = (activity: Activity) => {
    setActivities((prevActivities) => [...prevActivities, activity]);
  };

  const removeActivity = (activityId: number) => {
    setActivities((prevActivities) => prevActivities.filter((activity) => activity.id !== activityId));
  };

  return (
    <AppContext.Provider
      value={{
        foods,
        activities,
        weight,
        height,
        goal,
        age,
        sex,
        addFood,
        removeFood,
        addActivity,
        removeActivity,
        setWeight,
        setHeight,
        setGoal,
        setAge,
        setSex,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};


export const useAppContext = (): AppContextProps => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useAppContext must be used within an AppProvider');
  }
  return context;
};
