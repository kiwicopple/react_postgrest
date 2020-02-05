import React, { useEffect } from "react";
import "./App.css";
import { PostgrestClient } from "@supabase/postgrest-js";
// import axios from "axios";
import superagent from "superagent";

const App = () => {
  useEffect(() => {
    console.log("app did mount");
    const client = new PostgrestClient("http://localhost:4000");
    client
      .from("omega")
      .select("*")
      .then(res => {
        const { body: users } = res;
        console.log(users);
      })
      .catch(e => {
        console.log(e);
      });
      
    client
      .from("omega")
      .match({
        id: "kiwicopple"
      })
      .update(
        {
          username: "supabase"
        },
        {
          "Content-Type": "application/json",
          'accept': 'json'
        }
      )
      .then(res => {
        console.log(res);
      })
      .catch(e => {
        console.log(e);
      });

    // axios
    //   .patch("http://localhost:4000/omega?id=eq.kiwicopple", {
    //     username: "axios"
    //   })
    //   .then(res => {
    //     console.log(res);
    //   })
    //   .catch(e => {
    //     console.log(e);
    //   });

    // superagent
    //   .patch("http://localhost:4000/omega?id=eq.kiwicopple")
    //   .send({
    //     username: "superagent"
    //   })
    //   .end((err, res) => {
    //     console.log("err", err);
    //     console.log("res", res);
    //   });
  }, []);

  return <div className="App"></div>;
};

export default App;
