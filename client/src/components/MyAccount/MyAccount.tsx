import React, { useEffect } from "react";

export const MyAccount: React.FC = () => {
  useEffect(() => {
    fetch("http://localhost:4000/api/user", {
      method: "GET",
      credentials: "include",
      headers: new Headers({
        Accept: "application/json",
        "Content-Type": "application/json",
      }),
    }).then(async (res) => {
      console.log(await res.json());
    });
  });

  return <div>account</div>;
};
