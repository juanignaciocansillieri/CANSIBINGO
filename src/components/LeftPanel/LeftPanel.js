import React, { useEffect, useState } from 'react';
import PreviousBall from '../PreviousBall/PreviousBall';
import './LeftPanel.css';
import bolas300 from '../../assets/img/bolas300.png';

const LeftPanel = () => {
  const [numeros, setNumeros] = useState([]);
  const [numerosPasados, setNumerosPasados] = useState([]);
  const [ultimoNumero, setUltimoNumero] = useState();
  const [penultimoNumero, setPenultimoNumero] = useState();
  const [antePenultimoNumero, setAntePenultimoNumero] = useState();
  const [angle, setAngle] = useState(1080);

  const numerosAleatoriosNoRepetidos = (min, max, cantidad) => {
    const numerosAleatorios = [];
    if (min > max || cantidad > max - min) {
      return false;
    }
    while (numerosAleatorios.length < cantidad) {
      const num = Math.floor(Math.random() * (max - min) + min);
      if (numerosAleatorios.indexOf(num) === -1) {
        numerosAleatorios.push(num);
      }
    }
    return numerosAleatorios;
  };
  const rellenarArray = () => {
    const numerosAleatorios = numerosAleatoriosNoRepetidos(1, 91, 90);
    setNumeros(numerosAleatorios);
  };

  const iniciarJuego = () => {
    if (numeros.length < 1) {
      document.getElementById('numeroActual').innerHTML = '';
      const x = document.getElementsByClassName('numerito');
      let i;
      for (i = 0; i < x.length; i += 1) {
        x[i].style.backgroundColor = '';
      }
      const boton = document.getElementsByClassName('button');
      boton.innerHTML = 'NUEVO JUEGO';
      setNumerosPasados([]);
      rellenarArray();
      setAngle(0);
    } else {
      setAngle(x => x + 1080);
      const img = document.getElementById('bolaimg');
      img.style.transform = `rotate(${angle}deg)`;
      img.style.transition = ' transform 1s';
      const numActh1 = document.getElementById('numeroActual');
      numActh1.style.transform = `rotate(${angle}deg)`;
      numActh1.style.transition = 'transform 1s';
      const numeroActual = numeros.pop();
      numActh1.innerHTML = numeroActual;
      const elem = document.getElementById(numeroActual);
      elem.style.backgroundColor = '#7319a7';
      elem.style.width = '60px';
      elem.style.borderRadius = '60px';
      setNumerosPasados([numeroActual, ...numerosPasados]);
      setUltimoNumero(numeroActual);
      setPenultimoNumero(numerosPasados[0]);
      setAntePenultimoNumero(numerosPasados[1]);
    }
  };

  useEffect(() => {
    rellenarArray();
  }, []);

  return (
      <div className="panel-izq">
        <div className="bolas">
          <div className="bolaActual">
            <div className="numActual">
              <img
                src={bolas300}
                id="bolaimg"
                width="235px"
                height="235px"
                style={{ position: 'relative' }}
              />
              <h1
                id="numeroActual"
                style={{
                  color: '#000',
                  position: 'absolute',
                  font: 'bold',
                  fontSize: '75px',
                }}
              />
            </div>
          </div>
          <div className="container-bolas" style={{ display: 'flex' }}>
            <PreviousBall numero ={ultimoNumero}></PreviousBall>
            <PreviousBall numero ={penultimoNumero}></PreviousBall>
            <PreviousBall numero ={antePenultimoNumero}></PreviousBall>
          </div>
          <div className="button">
            <a href="#" onClick={iniciarJuego} className="startButton" id="startButton">
              SIGUIENTE NÚMERO
            </a>
          </div>
        </div>
      </div>
  );
};

export default LeftPanel;
