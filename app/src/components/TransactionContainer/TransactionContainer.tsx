import TransactionGroup from "../TransactionGroup/TransactionGroup";
import "./TransactionContainer.css";

function TransactionContainer() {
    return (
        <section className="ContainerOfContainers">
            <TransactionGroup values={[1, 10, 900]} names={["Pizza", "Roupas", "Lazer"]} categories={["alimentation", "clothes", "leisure"]} date={new Date("2021-10-20")} dates={["2021-10-20", "2021-10-20", "2021-10-20"]} description={["pizza de peperoni", "roupas da gucci", "ir pra praia"]}/>
            <TransactionGroup values={[1, 10, 900]} names={["Pizza", "Roupas", "Lazer"]} categories={["alimentation", "clothes", "leisure"]} date={new Date("2021-10-20")} dates={["2021-10-20", "2021-10-20", "2021-10-20"]} description={["pizza de peperoni", "roupas da gucci", "ir pra praia"]}/>
            <TransactionGroup values={[1, 10, 900]} names={["Pizza", "Roupas", "Lazer"]} categories={["alimentation", "clothes", "leisure"]} date={new Date("2021-10-20")} dates={["2021-10-20", "2021-10-20", "2021-10-20"]} description={["pizza de peperoni", "roupas da gucci", "ir pra praia"]}/>
        </section>
    );
}

export default TransactionContainer;