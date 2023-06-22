import { View, Text, StyleSheet } from "react-native";
import { Image } from "expo-image";
import CountryEntity from "../../entities/country-entity";

interface Props {
    country: CountryEntity;
}

export default function CardCountry(props: Props) {
    return (
        <View style={styles.card}>
            <View>
                <Image style={styles.flagStyle} source={{ uri: props.country.flag }} />
            </View>
            <View style={{ maxWidth: '70%' }}>
                <Text style={{ fontWeight: '700' }}>{props.country.name}</Text>
                <Text style={{ fontStyle: 'italic' }}>{props.country.NamePt}</Text>
                <Text style={{ fontStyle: 'italic' }}>{props.country.capital}</Text>
                <Text style={{ fontStyle: 'italic' }}>{props.country.region}</Text>
                <Text style={{ fontStyle: 'italic' }}>{props.country.population}</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({

    card: {
        width: '100%',
        backgroundColor: '#ffffab',
        borderRadius: 20,
        flexDirection: "row",
        alignItems: 'center',
        padding: 16,
        marginVertical: 5,
        justifyContent: 'flex-start',

    },

    flagStyle: {
        width: 70,
        height: 70,
        marginRight: 16,
    }
});