import { View, Text, StyleSheet, FlatList } from "react-native";
import { useEffect, useState } from "react";
import CountryEntity from "../entities/country-entity";
import CardCountry from "./components/card-country";

export default function HomePage() {

    const [countries, setCountries] = useState<CountryEntity[]>([]);

    useEffect(() => {
        var requestOptions = {
            method: 'GET',
        };

        let countryList: CountryEntity[] = []

        fetch("https://restcountries.com/v3.1/all", requestOptions)
            .then(response => response.json())
            .then(result => {
                result.map(item => {
                    countryList.push({
                        id: item.name.common,
                        flag: item.flags.svg,
                        name: item.name.common,
                        NamePt: item.translations.por.common,
                        capital: item.capital,
                        region: item.region,
                        population: item.population,
                    });
                })


            })
            .catch(error => console.log('error', error));

        setCountries(countryList);
    }, []);

    return (
        <View style={styles.container}>
            <Text style={styles.titleStyle}>Lista de Países</Text>
            <FlatList
                renderItem={(country) =>
                    <CardCountry country={country.item} />
                }
                data={countries}
                keyExtractor={item => item.id}>
            </FlatList>
        </View>

    )
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 35,

    },

    titleStyle: {
        fontSize: 25,
        fontWeight: '800',
        opacity: 0.9,
        marginBottom: 20
    },

});