import React from "react";
import styles from "./UserStatsGraphs.module.css";
import { VictoryPie, VictoryBar, VictoryChart } from "victory";

const UserStatsGraphs = ({ data }) => {
  const [graph, setGraph] = React.useState([]);
  const [total, setTotal] = React.useState(0);
  React.useEffect(() => {
    const graphData = data.map((item) => {
      return {
        x: item.title,
        y: Number(item.acessos),
      };
    });
    setGraph(graphData);
    if (data.length > 0) {
      setTotal(
        data.map(({ acessos }) => Number(acessos)).reduce((a, b) => a + b)
      );
    }
  }, [data]);
  return (
    <section className={`${styles.graph} animeFeft`}>
      <div className={`${styles.total} ${styles.GraphItem}`}>
        <p>Acessos: {total}</p>
      </div>
      <div className={styles.GraphItem}>
        <VictoryPie
          data={graph}
          innerRadius={50}
          padding={{ top: 20, bottom: 20, left: 80, right: 80 }}
          style={{
            data: {
              fillOpacity: 0.9,
              stroke: "#fff",
              strokeWidth: 2,
            },
            labels: {
              fontSize: 14,
              fill: "#333",
            },
          }}
        />
      </div>
      <div className={styles.GraphItem}>
        <VictoryChart>
          <VictoryBar alignment="start" data={graph} />
        </VictoryChart>
      </div>
    </section>
  );
};

export default UserStatsGraphs;
