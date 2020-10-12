import React from 'react';
import PropTypes from 'prop-types';
import logo from './logo.svg';
import './App.css';
import ReviewItems from './Review'

function App() {

  // const userJsx = <strong>Viny Gilang Ramadhan</strong>;
  return (
    <div className="ParentBox">
      <FotoProduk></FotoProduk>
      <ProdukInfo isDiscount="yes" name="Nike Lebron Signature Move" category="Hot Zone"></ProdukInfo>
      <ReviewItems></ReviewItems>
    </div>
  );
}


function FotoProduk(){
  return (
    <div className="Foto">
      <img src="nike.jpg"></img>
  </div>
  );
}

function CheckDiskon(props){
  const { isDiscount,discount } = props;

  if (isDiscount == "yes") {
    return (
      <p>Diskon {discount}% off</p>
    );
  } else if (isDiscount == "coming") {
    return (
      <p>Akan ada diskon..</p>
    );
  } else {
    return (
      <p>Belum ada diskon</p>
    );
  }
}

function ProdukInfo(props){
  const {category,name,isDiscount} = props;
  const benefits = ["Tidak Mudah Lembab","Bahan lebih halus","Outsole Empuk nyaman"];
  const listBenefits = benefits.map((itemBenefit) =>
    <li key={itemBenefit}>{itemBenefit}</li>
  );

  return (
      <div className="Deskripsi">
        <p className="Cate">{category}</p>
        <h1 className="Title">{name}</h1>
        <p className= "Price">IDR 75.000.000</p>
        <CheckDiskon isDiscount = {isDiscount} discount={50}></CheckDiskon>
        <p className = "Info">
          One of the most recognizable shoes in the AJ collection, the Air Jordan 3 Retro Features  One of the most recognizable shoes in the AJ collection, the Air Jordan 3 Retro Features One of the most recognizable shoes in the AJ collection, the Air Jordan 3 Retro Features One of the most recognizable shoes in the AJ collection, the Air Jordan 3 Retro Features One of the most recognizable shoes in the AJ collection, the Air Jordan 3 Retro Features.
        </p>
        <ul>
          {listBenefits}
        </ul>
        <a onClick={(e) => TambahProduk(name, e)} href="#">Add to Chart</a>
      </div>
  );
}

function TambahProduk(e){
  return alert("Anda Membeli Produk "+ e)
}
CheckDiskon.propTypes = {
  discount: PropTypes.number
};

export default App;
