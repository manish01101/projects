import { useState } from "react";
import Card from "./Card";


export default function CardDetails() {
  const [userDetails, setUserDetails] = useState([
    {
      name: "manish",
      description: "student at nsec",
      interest: ["iconid", "open source", "app dev"],
      socialHandle: [
        {
          name: "LinkedIn",
          link: "https://in.linkedin.com/",
        },
        {
          name: "Twitter",
          link: "https://twitter.com/?lang=en",
        },
      ],
    },
    {
      name: "abhi",
      description: "student at nsec",
      interest: ["a", "open a", "afdf"],
      socialHandle: [
        {
          name: "LinkedIn",
          link: "https://in.linkedin.com/",
        },
        {
          name: "Twitter",
          link: "https://twitter.com/?lang=en",
        },
      ],
    },
  ]);
  return (
    <div>
      {userDetails.map((user) => {
        return <Card user={user} key={Math.floor(Math.random() * 100000)} />;
      })}
    </div>
  );
}
