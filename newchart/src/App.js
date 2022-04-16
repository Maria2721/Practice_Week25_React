import "./App.css";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

export const data = {
  labels: [
    "Сон",
    "Утренняя рутина",
    "Танцы",
    "Прогулка за кофе",
    "Завтрак",
    "Учеба: курсы",
    "Youtube",
    "Прогулка до библиотеки",
    "Учеба: гидродинамика/диплом",
    "Ужин",
    "Просмотр фильма",
    "Душ + вчерняя рутина",
  ],
  datasets: [
    {
      label: "Прмерный план на день",
      data: [9, 0.5, 1, 1, 1, 3, 1, 0.5, 4, 1, 2, 1],
      backgroundColor: [
        "rgba(255, 0, 0, 0.6)",
        "rgba(255, 69, 0, 0.6)",
        "rgba(255, 255, 0, 0.6)",
        "rgba(0, 128, 0, 0.6)",
        "rgba(0, 255, 255, 0.6)",
        "rgba(0, 0, 255, 0.6)",
        "rgba(128, 0, 128, 0.6)",
        "rgba(0, 0, 128, 0.6)",
        "rgba(255, 20, 147, 0.6)",
        "rgba(75, 0, 130, 0.6)",
        "rgba(124, 252, 0, 0.6)",
        "rgba(	65, 105, 225, 0.6)",
      ],
      borderColor: [
        "rgba(255, 0, 0, 1)",
        "rgba(255, 69, 0, 1)",
        "rgba(255, 255, 0, 1)",
        "rgba(0, 128, 0, 1)",
        "rgba(0, 255, 255, 1)",
        "rgba(0, 0, 255, 1)",
        "rgba(128, 0, 128, 1)",
        "rgba(0, 0, 128, 1)",
        "rgba(255, 20, 147, 1)",
        "rgba(75, 0, 130, 1)",
        "rgba(124, 252, 0, 1)",
        "rgba(	65, 105, 225, 1)",
      ],
      borderWidth: 1,
    },
  ],
};

function App() {
  return (
    <div className="App">
      <div className="chartTitle">План на день</div>
      <Pie data={data} />
    </div>
  );
}

export default App;
