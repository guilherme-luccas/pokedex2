import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import logo from "../assets/logo.png";
import { NavItem } from "../src/components/NavItem";
import listImg from "../assets/icons/lista.png";
import helpImg from "../assets/icons/ajuda.png";
import configImg from "../assets/icons/configuracao.png";
import achivImg from "../assets/icons/conquistas.png";
import dashImg from "../assets/icons/dashboard.png";
import { gql } from "@apollo/client";
import client from "../apollo-client";

import { useState, useEffect } from "react";
import { PokemonCard } from "../src/components/PokemonCard";
import { CheckBox } from "../src/components/CheckBox";

export default function Home({ pokemons }) {
  function ToggleActivity() {
    setActive(!active);
  }

  return (
    <div className={styles.container}>
      <div className={styles.containerApp}>
        <nav>
          <div className={styles.logo}>
            <Image src={logo} />

            <div>
              <h4>Voltbras App</h4>
              <p>Pokémon Manager</p>
            </div>
          </div>
          <div>
            <button onClick={ToggleActivity}>
              <NavItem text="Lista" icon={listImg} />
            </button>
            <NavItem text="Conquistas" icon={achivImg} />
            <NavItem text="Pokédex" icon={dashImg} />
            <NavItem text="Ajuda" icon={helpImg} />
            <NavItem text="Configuração" icon={configImg} />
          </div>
        </nav>
        <div className={styles.containerList}>
          <div className={styles.containerGrid}>
            <h2>Lista de Pokémons</h2>
            <p>Total visíveis: {pokemons.length}</p>
            <div className={styles.containerScroll}>
              <div className={styles.grid}>
                {pokemons.map((pokemon, index) => {
                  return (
                    <PokemonCard
                      key={index}
                      name={pokemon.name}
                      cp={pokemon.maxCP}
                      number={pokemon.number}
                      types={pokemon.types}
                      image={pokemon.image}
                    />
                  );
                })}
              </div>
            </div>
          </div>
        </div>
        <div className={styles.containerFilter}>
          <div className={styles.filter}>
            <div className={styles.filter2}>
              <p>Filtro</p>
              <div>
                <p>maxCP</p>
              </div>
              <div className={styles.filterRange}>
                <div className={styles.filterRangeValue}>329</div>
                <div className={styles.filterRangeValue}>2550</div>
              </div>
              <div>
                <p className={styles.filterTypesText}>Types</p>
                <div className={styles.filterTypes}>
                  <CheckBox text="Normal" />
                  <CheckBox text="Water" />
                  <CheckBox text="Poison" />
                  <CheckBox text="Psychic" />
                  <CheckBox text="Bug" />
                  <CheckBox text="Dark" />
                  <CheckBox text="Fire" />
                  <CheckBox text="Flying" />
                  <CheckBox text="Eletric" />
                  <CheckBox text="Rock" />
                  <CheckBox text="Dragon" />
                  <CheckBox text="Steel" />
                  <CheckBox text="Fighting" />
                  <CheckBox text="Grass" />
                  <CheckBox text="Ground" />
                  <CheckBox text="Ice" />
                  <CheckBox text="Ghost" />
                  <CheckBox text="Fairy" />

                  {/* <input type="checkbox" />
                  <label htmlFor="">Name</label>
                  <input type="checkbox" />
                  <label htmlFor="">Name</label>
                  <input type="checkbox" />
                  <label htmlFor="">Name</label>
                  <input type="checkbox" />
                  <label htmlFor="">Name</label>
                  <input type="checkbox" />
                  <label htmlFor="">Name</label>
                  <input type="checkbox" />
                  <label htmlFor="">Name</label>
                  <input type="checkbox" />
                  <label htmlFor="">Name</label>
                  <input type="checkbox" />
                  <label htmlFor="">Name</label>
                  <input type="checkbox" />
                  <label htmlFor="">Name</label>
                  <input type="checkbox" />
                  <label htmlFor="">Name</label>
                  <input type="checkbox" />
                  <label htmlFor="">Name</label>
                  <input type="checkbox" />
                  <label htmlFor="">Name</label>
                  <input type="checkbox" />
                  <label htmlFor="">Name</label>
                  <input type="checkbox" />
                  <label htmlFor="">Name</label>
                  <input type="checkbox" />
                  <label htmlFor="">Name</label>
                  <input type="checkbox" />
                  <label htmlFor="">Name</label>
                  <input type="checkbox" />
                  <label htmlFor="">Name</label> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export async function getStaticProps() {
  const { data } = await client.query({
    query: gql`
      query Pokemons {
        pokemons(first: 151) {
          name
          maxCP
          number
          types
          image
        }
      }
    `,
  });

  return {
    props: {
      pokemons: data.pokemons,
    },
  };
}
