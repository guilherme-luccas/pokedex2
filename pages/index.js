import { useState, useContext, useEffect, lazy, Suspense } from "react";
import Image from "next/image";

import client from "../apollo-client";

import { gql } from "@apollo/client";
import { Range } from "rc-slider";

import styles from "../styles/Home.module.css";
import "rc-slider/assets/index.css";
import logo from "../assets/logo.png";
import listImg from "../assets/icons/lista.png";
import helpImg from "../assets/icons/ajuda.png";
import configImg from "../assets/icons/configuracao.png";
import achivImg from "../assets/icons/conquistas.png";
import dashImg from "../assets/icons/dashboard.png";

import { CheckBox } from "../src/components/CheckBox";
import { CheckboxContext } from "../src/CheckboxContext";
import { LazyLoading } from "../src/components/LazyLoading";
import { NavItem } from "../src/components/NavItem";

const PokemonCard = lazy(() => import("../src/components/PokemonCard"));

export default function Home({ pokemons }) {
  const [defaultPokemonList, setDefaultPokemonList] = useState(pokemons);

  const [pokemonVisible, setPokemonVisible] = useState([]);

  const [filterValue, setFilterValue] = useState([0, 4000]);
  const { checkBoxValues } = useContext(CheckboxContext);
  const active = false;

  useEffect(() => {
    const newPokemonVisible = defaultPokemonList
      .filter(
        (val) => val.maxCP >= filterValue[0] && val.maxCP <= filterValue[1]
      )
      .filter(
        (val) =>
          val.types.some((tipo) => checkBoxValues.includes(tipo)) ||
          checkBoxValues.length == 0
      );
    setPokemonVisible(newPokemonVisible);
  }, [checkBoxValues, filterValue]);

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
            <button>
              <NavItem text="Lista" icon={listImg} active={active} />
            </button>
            <NavItem text="Conquistas" icon={achivImg} active={active} />
            <NavItem text="Pokédex" icon={dashImg} active={active} />
            <NavItem text="Ajuda" icon={helpImg} active={active} />
            <NavItem text="Configuração" icon={configImg} active={active} />
          </div>
        </nav>
        <div className={styles.containerList}>
          <div className={styles.containerGrid}>
            <h2>Lista de Pokémons</h2>
            <p>Total visíveis: {pokemonVisible.length}</p>
            <div className={styles.containerScroll}>
              <div className={styles.grid}>
                {pokemonVisible.map((pokemon, index) => {
                  return (
                    <Suspense key={index} fallback={<LazyLoading />}>
                      <PokemonCard
                        name={pokemon.name}
                        cp={pokemon.maxCP}
                        number={pokemon.number}
                        types={pokemon.types}
                        image={pokemon.image}
                      />
                    </Suspense>
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
                <Range
                  min={0}
                  max={4000}
                  defaultValue={filterValue}
                  onChange={setFilterValue}
                />
              </div>

              <div className={styles.filterRange}>
                <div className={styles.filterRangeValue}>{filterValue[0]}</div>
                <div className={styles.filterRangeValue}>{filterValue[1]}</div>
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
                  <CheckBox text="Electric" />
                  <CheckBox text="Rock" />
                  <CheckBox text="Dragon" />
                  <CheckBox text="Steel" />
                  <CheckBox text="Fighting" />
                  <CheckBox text="Grass" />
                  <CheckBox text="Ground" />
                  <CheckBox text="Ice" />
                  <CheckBox text="Ghost" />
                  <CheckBox text="Fairy" />
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
