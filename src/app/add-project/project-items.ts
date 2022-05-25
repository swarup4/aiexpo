export interface projectType {
  value: string;
  name: string;
}

const MENUITEMS = [
  { value: "linear", name: "Linear Regrassion" },
  { value: 'polynomial', name: 'Polynomial Regression' },
  { value: 'ridge', name: 'Ridge Regression' },
  { value: 'lasso', name: 'Lasso Regression' },
  { value: 'logistic', name: 'Logistic Regrassion' },
  { value: 'decision', name: 'Decision Tree Cross' },
  { value: 'knn', name: 'K Nearest Neighbour' },
  { value: 'naive', name: 'Naive Bayes' },
  { value: 'kmeans', name: 'K Means' },
  { value: 'random', name: 'Random Forest' },
  { value: 'pca', name: 'Principal Component Analysis' }
]

export const ProjectItems: projectType[] = MENUITEMS;
