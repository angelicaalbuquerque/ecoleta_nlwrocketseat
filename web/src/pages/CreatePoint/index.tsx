import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "./styles.css";
import logo from "../../assets/logo.svg";
import { FiArrowLeft } from "react-icons/fi";
import { Map, TileLayer, Marker } from "react-leaflet";
import api from "../../services/api";

const CreatePoint = () => {
  useEffect(() => {
    api.get("items").then((response) => {
      console.log(response);
    });
  }, []);

  return (
    <div id="page-create-point">
      <header>
        <img src={logo} alt="logo Ecoleta" />

        <Link to="/">
          <FiArrowLeft />
          Voltar para home
        </Link>
      </header>

      <form>
        <h1>
          Cadastro do <br /> ponto de coleta
        </h1>

        <fieldset>
          <legend>
            <h2>Dados</h2>
          </legend>

          <div className="field">
            <label htmlFor="name">Nome da entidade</label>
            <input type="text" name="name" id="name" />
          </div>

          <div className="field-group">
            <div className="field">
              <label htmlFor="email">E-mail</label>
              <input type="email" name="email" id="email" />
            </div>

            <div className="field">
              <label htmlFor="whatsapp">Whatsapp</label>
              <input type="text" name="whatsapp" id="whatsapp" />
            </div>
          </div>
        </fieldset>

        <fieldset>
          <legend>
            <h2>Endereço</h2>
            <span>Selecione o endereço no mapa</span>
          </legend>

          <Map center={[-22.8788063, -43.3657861]} zoom={15}>
            <TileLayer
              attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />

            <Marker position={[-22.8788063, -43.3657861]} />
          </Map>

          <div className="field-group">
            <div className="field">
              <label htmlFor="uf">Estado (UF)</label>
              <select name="uf" id="uf">
                <option value="0">Selecione uma UF</option>
              </select>
            </div>

            <div className="field">
              <label htmlFor="city">Cidade</label>
              <select name="city" id="city">
                <option value="0">Selecione uma cidade</option>
              </select>
            </div>
          </div>
        </fieldset>

        <fieldset>
          <legend>
            <h2>Ítens de Coleta</h2>
            <span>Selecione um ou mais ítens abaixo</span>
          </legend>

          <ul className="items-grid">
            <li>
              <img
                src="http://localhost:3333/uploads/oleo.svg"
                alt="Óleo de Cozinha"
              />
              <span>Óleo de Cozinha</span>
            </li>

            <li className="selected">
              <img
                src="http://localhost:3333/uploads/oleo.svg"
                alt="Óleo de Cozinha"
              />
              <span>Óleo de Cozinha</span>
            </li>

            <li>
              <img
                src="http://localhost:3333/uploads/oleo.svg"
                alt="Óleo de Cozinha"
              />
              <span>Óleo de Cozinha</span>
            </li>

            <li>
              <img
                src="http://localhost:3333/uploads/oleo.svg"
                alt="Óleo de Cozinha"
              />
              <span>Óleo de Cozinha</span>
            </li>

            <li>
              <img
                src="http://localhost:3333/uploads/oleo.svg"
                alt="Óleo de Cozinha"
              />
              <span>Óleo de Cozinha</span>
            </li>

            <li>
              <img
                src="http://localhost:3333/uploads/oleo.svg"
                alt="Óleo de Cozinha"
              />
              <span>Óleo de Cozinha</span>
            </li>
          </ul>
        </fieldset>

        <button type="submit">Cadastrar ponto de coleta</button>
      </form>
    </div>
  );
};

export default CreatePoint;
