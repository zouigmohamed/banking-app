import HeaderBox from "@/components/HeaderBox";
import RightSideBar from "@/components/RightSideBar";
import TotalBalanceBox from "@/components/TotalBalanceBox";
import React from "react";

const Home = () => {
  const loggedIn = { firstName: "John", lastName: "Doe", email:'johnDoe@gmail.com' };
  return (
    <section className="home">
      <div className="home-content">
        <header className="home-header">
          <HeaderBox
            type="greeting"
            title="Welcome"
            user={loggedIn?.firstName || "Guest"}
            subtext="Explore your banking options with us!"
          />
          <TotalBalanceBox
            accounts={[]}
            totalBanks={2}
            totalCurrentBalance={1250.25}
          />
        </header>
      </div>
      <RightSideBar user={loggedIn || "Guest"} transactions={[]} banks={[{currentBalance:123.50},{currentBalance:123.50}]}/>
    </section>
  );
};

export default Home;
