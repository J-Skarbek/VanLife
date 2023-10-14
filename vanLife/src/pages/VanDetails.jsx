import React from "react";
import { useParams } from "react-router-dom";

function VanDetails() {

  const params = useParams();
  const [van, setVan] = React.useState(null);
  console.log(params)

  React.useEffect(() => {
    fetch(`/api/vans/${params.id}`, { mode: "cors" })
      .then((response) => response.json())
      .then((vanData) => setVan(vanData.vans))
      .catch((error) => console.error(error));
  }, [params.id]);

  return (
    <div className="main flex justify-center pb-4 w-screen max-w-7x min-h-screen">
      <div className="flex flex-col pb-4 w-screen max-w-7xl">
      </div>
    </div>
  )
}

export default VanDetails;