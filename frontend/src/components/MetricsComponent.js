import React, { useEffect, useState, useContext } from "react";
import axios from "axios";
import { DataContext } from "../context/DataProvider";

const serverUrl = process.env.REACT_APP_SERVER_URL;

const MetricsComponent = () => {
  const [metrics, setMetrics] = useState({});
  const { clusters, setIsLoading } = useContext(DataContext);

  useEffect(() => {
    // setIsLoading(true)

    axios
      .get(`${serverUrl}/cluster/metrics`)
      .then((response) => setMetrics(response.data))
      .catch((error) => console.error(error));

    // setIsLoading(false)
  }, [clusters]);

  return (

    <>
      <h2 className="text-3xl font-bold text-center text-gray-800 mb-6 underline">
        Metrics Overview
      </h2>

      <div className="metrics-container p-6 rounded-lg shadow-lg">

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="card bg-white p-4 rounded-lg shadow-md border border-gray-200">
            <h3 className="text-lg font-semibold text-gray-700">Total Users</h3>
            <p className="text-2xl font-bold text-blue-600">{metrics.total_users || 0}</p>
          </div>
          <div className="card bg-white p-4 rounded-lg shadow-md border border-gray-200">
            <h3 className="text-lg font-semibold text-gray-700">Total Clusters</h3>
            <p className="text-2xl font-bold text-green-600">{metrics.total_clusters || 0}</p>
          </div>
          <div className="card bg-white p-4 rounded-lg shadow-md border border-gray-200">
            <h3 className="text-lg font-semibold text-gray-700">Total Projects</h3>
            <p className="text-2xl font-bold text-purple-600">{metrics.total_projects || 0}</p>
          </div>
          <div className="card bg-white p-4 rounded-lg shadow-md border border-gray-200">
            <h3 className="text-lg font-semibold text-gray-700">Total Leads</h3>
            <p className="text-2xl font-bold text-red-600">{metrics.total_leads || 0}</p>
          </div>
          <div className="card bg-white p-4 rounded-lg shadow-md border border-gray-200">
            <h3 className="text-lg font-semibold text-gray-700">Avg Users per Cluster</h3>
            <p className="text-2xl font-bold text-indigo-600">
              {metrics.total_clusters > 0
                ? (metrics.total_users / metrics.total_clusters).toFixed(2)
                : 0}
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default MetricsComponent;
