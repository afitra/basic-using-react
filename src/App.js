import React from "react";
import logo from "./logo.svg"; //eslint-disable-line no-unused-vars
import Review from "./Review.js";
import MidlewareProps from "./Props.js";
import "./App.css";
let nama = "Teslah";
// let nama1 = "Teslah-1";
// let nama1 = "Teslah-1";
// let nama1 = "Teslah-1";
// let nama1 = "Teslah-1";
// let nama1 = "Teslah-1";
// let nama1 = "Teslah-1";
// let nama1 = "Teslah-1";
// let nama1 = "Teslah-1";
let foto = "logo512";
// let foto1 = "logo192";
// let foto1 = "logo192";
// let foto1 = "logo192";
// let foto1 = "logo192";

MidlewareProps(Review);
function App() {
  const list = [
    {
      id: "a",
      firstname: "Robin",
      lastname: "Wieruch",
      year: 1988,
    },
    {
      id: "b",
      firstname: "Dave",
      lastname: "Davidds",
      year: 1990,
    },
  ];
  const review = [
    {
      id: "a",
      name: "Robin",
      review: "Wieruch",
      year: 1988,
    },
    {
      id: "b",
      name: "Dave",
      review: "Davidds",
      year: 1990,
    },
  ];
  let produk = "Sepatu ";
  let content =
    "is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.";
  return (
    <div className={nama}>
      <p>
        Dummy <strong>React</strong>
      </p>
      <Kom1 />
      <GetList list={list} />
      <DecriptionDetail kontent={content} produk={produk} />

      <Review review={review} />
    </div>
  );
}

function GetList(params) {
  let { list } = params;

  return (
    <ul>
      {list.map((item, index) => (
        <li key={item.id}>
          <div>{item.id}</div>
          <div>{item.firstname}</div>
          <div>{item.lastname}</div>
          <div>{item.year}</div>
          <div>{index + 1}</div>
        </li>
      ))}
    </ul>
  );
}
function Kom1() {
  return (
    <div className="Foto">
      {/* eslint-disable-next-line  jsx-a11y/alt-text  */}
      <img src={`${foto}.png`}></img>
    </div>
  );
}

function DecriptionDetail(props) {
  return (
    <div className="Descrip">
      {/* eslint-disable-next-line  jsx-a11y/alt-text  */}
      <p>{props.kontent}</p>
      {/*  eslint-disable-next-line  jsx-a11y/anchor-is-valid */}
      <a
        onClick={(e) => {
          addCart(props.produk, e);
        }}
      >
        BUY
      </a>
      <button onMouseOver={akanKlik}>akan</button>
      <button onMouseOut={gakJadi}> gak jadi </button>
    </div>
  );
}

function addCart(data, e) {
  console.log("beliiii", data, ">>>>>>>>", e);
}
function akanKlik(params) {
  console.log(" akan beliiii");
}
function gakJadi(params) {
  console.log("gak jadi beliiii");
}

export default App;
