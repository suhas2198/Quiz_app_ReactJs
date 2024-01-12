import { useEffect, useMemo, useState } from "react";
import "./app.css";
import Quizz from "./components/Quizz/Quizz";
import Timer from "./components/Timer/Timer";
import Start from "./components/Start/Start";

function App() {
  const [username, setUserName]=useState(null)
  const [questionNumber, setQuestionNumber] = useState(1);
  const [stop, setStop] = useState(false);
  const [earned, setEarned] = useState("Rs. 0");

  const data = [
    {
      id: 1,
      question: "Rolex is company that specialize in what type f product?",
      answers: [
        {
          text: "phone",
          correct: false,
        },
        {
          text: "watches",
          correct: true,
        },
        {
          text: "monitor",
          correct: false,
        },
        {
          text: "Headphone",
          correct: false,
        },
      ],
    },
    {
      id: 2,
      question: "Poco is company that specialize in what type of product?",
      answers: [
        {
          text: "phone",
          correct: true,
        },
        {
          text: "watches",
          correct: false,
        },
        {
          text: "monitor",
          correct: false,
        },
        {
          text: "Headphone",
          correct: false,
        },
      ],
    },
    {
      id: 3,
      question: "Who is the prime Minister of India ",
      answers: [
        {
          text: "Devendra Fadanvis",
          correct: false,
        },
        {
          text: "Narendra Modi",
          correct: true,
        },
        {
          text: "Rahul Ghandi",
          correct: false,
        },
        {
          text: "Nitin Gadkari",
          correct: false,
        },
      ],
    },
    {
      id: 4,
      question: "Mahindra is company that specialize in what type f product?",
      answers: [
        {
          text: "phone",
          correct: false,
        },
        {
          text: "watches",
          correct: false,
        },
        {
          text: "monitor",
          correct: false,
        },
        {
          text: "Atomobiles",
          correct: true,
        },
      ],
    },
    {
      id: 5,
      question: "What is the Value of Pi?",
      answers: [
        {
          text: "2.222",
          correct: false,
        },
        {
          text: "5.66",
          correct: false,
        },
        {
          text: "3.56",
          correct: false,
        },
        {
          text: "3.141",
          correct: true,
        },
      ],
    }, {
      id: 6,
      question: "when did Shivaji maharaj born?",
      answers: [
        {
          text: "19 Feb 1660",
          correct: false,
        },
        {
          text: "19th March 1630",
          correct: false,
        },
        {
          text: "19th Feb 1630",
          correct: true,
        },
        {
          text: "1st May 1650 ",
          correct: false,
        },
      ],
    }, {
      id: 7,
      question: "Britania is company that specialize in what type f product?",
      answers: [
        {
          text: "phone",
          correct: false,
        },
        {
          text: "watches",
          correct: false,
        },
        {
          text: "monitor",
          correct: false,
        },
        {
          text: "food",
          correct: true,
        },
      ],
    }, {
      id: 8,
      question: " who is the priciple inventer of python?",
      answers: [
        {
          text: "J J Thopson",
          correct: false,
        },
        {
          text: "Sikka Senjal",
          correct: false,
        },
        {
          text: "Samyara sikanda",
          correct: false,
        },
        {
          text: "Guido van rossum",
          correct: true,
        },
      ],
    }, {
      id: 9,
      question: "when Mathematic day is celebrated?",
      answers: [
        {
          text: "22nd Dec",
          correct: true,
        },
        {
          text: "20th Dec",
          correct: false,
        },
        {
          text: "12th Feb",
          correct: false,
        },
        {
          text: "1st Jan",
          correct: true,
        },
      ],
    }, {
      id: 10,
      question: "when Enviornmental day is celebrated ?",
      answers: [
        {
          text: "5th Jan",
          correct: false,
        },
        {
          text: "10th July",
          correct: false,
        },
        {
          text: "5th June",
          correct: true,
        },
        {
          text: "10th Dec",
          correct: false,
        },
      ],
    }, {
      id: 11,
      question: "Yippe is company that specialize in what type f product?",
      answers: [
        {
          text: "Noodles",
          correct: true,
        },
        {
          text: "watches",
          correct: false,
        },
        {
          text: "monitor",
          correct: false,
        },
        {
          text: "Atomobiles",
          correct: false,
        },
      ],
    }, {
      id: 12,
      question: " Who was the First Prime ministe of india?",
      answers: [
        {
          text: "Mahatma Ghandi",
          correct: false,
        },
        {
          text: "Indira Ghandi",
          correct: false,
        },
        {
          text: "Lala Lajpat rai",
          correct: false,
        },
        {
          text: "Pandit Javaharlal Neharu",
          correct: true,
        },
      ],
    }, {
      id: 13,
      question: "Audi is company that specialize in what type of product?",
      answers: [
        {
          text: "phone",
          correct: false,
        },
        {
          text: "watches",
          correct: false,
        },
        {
          text: "monitor",
          correct: false,
        },
        {
          text: "Atomobiles",
          correct: true,
        },
      ],
    },
    {
      id: 14,
      question: "Samsung is company that specialize in what type of product?",
      answers: [
        {
          text: "phone",
          correct: true,
        },
        {
          text: "watches",
          correct: false,
        },
        {
          text: "Footwear",
          correct: false,
        },
        {
          text: "Atomobiles",
          correct: false,
        },
      ],
    },
    {
      id: 15,
      question: "Dell is company that specialize in what type of product?",
      answers: [
        {
          text: "phone",
          correct: false,
        },
        {
          text: "watches",
          correct: false,
        },
        {
          text: "Laptop",
          correct: true,
        },
        {
          text: "Atomobiles",
          correct: false,
        },
      ],
    },
  ];
  const moneyPyramid = useMemo(
    () =>
      [
        { id: 1, amount: " Rs. 100 " },
        { id: 2, amount: "Rs. 500" },
        { id: 3, amount: "Rs. 1000" },
        { id: 4, amount: "Rs. 5000" },
        { id: 5, amount: "Rs.10000" },
        { id: 6, amount: "Rs. 20000" },
        { id: 7, amount: "Rs. 40000" },
        { id: 8, amount: "Rs. 80000" },
        { id: 9, amount: "Rs. 100000" },
        { id: 10, amount: "Rs. 250000" },
        { id: 11, amount: "Rs. 500000" },
        { id: 12, amount: "Rs. 750000" },
        { id: 13, amount: "Rs. 1000000" },
        { id: 14, amount: "Rs. 5000000" },
        { id: 15, amount: "Rs. 10000000" },
      ].reverse(),

    []
  );

  useEffect(() => {
    questionNumber > 1 &&
      setEarned(moneyPyramid.find((m) => m.id === questionNumber - 1).amount);
  }, [moneyPyramid, questionNumber]);
  return (
    <div className="app">
      {username ? (
        <>
         <div className="main">
        {stop ? (
          <h1 className="endText">You earned: {earned}</h1>
        ) : (
          <>
            <div className="top">
              <div className="timer">
                <Timer setStop={setStop} questionNumber={questionNumber} />
              </div>
            </div>
            <div className="bottom">
              <Quizz
                data={data}
                setStop={setStop}
                questionNumber={questionNumber}
                setQuestionNumber={setQuestionNumber}
              />
            </div>
          </>
        )}
      </div>
      <div className="pyramid">
        <ul className="moneyList">
          {moneyPyramid.map((m) => (
            <li
              className={
                questionNumber === m.id
                  ? "moneyListItem active"
                  : "moneyListItem"
              }
            >
              <span className="moneyListItemNumber">{m.id}</span>
              <span className="moneyListItemAmount">{m.amount}</span>
            </li>
          ))}
        </ul>
      </div>

        </>
      ):<Start setUserName={setUserName}/> }
     
    </div>
  );
}

export default App;
