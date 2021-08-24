import React from "react";
import { storiesOf } from "@storybook/react";
import { action } from '@storybook/addon-actions';
import { AutoComplete, DataSourceType } from "./autoComplete";

interface  LakerPlayerProps {
    value: string;
    number?: number;
}

interface GithubUserProps {
    login?: string;
    url?: string;
    avatar_url?: string;
}

const SimpleComplete = () => {
    const  lakers = [
        'bradley', 'pope', 'caruso', 'cock', 'cousins',
        'james', 'AD','green'
    ];
    const  lakersWithNumber = [
        { value: 'bradley', number: 0},
        { value: 'pope', number: 1},
        { value: 'caruso', number: 2},
        { value: 'cock', number: 3},
        { value: 'cousins', number: 4},
        { value: 'james', number: 5},
        { value: 'green', number: 6},
        { value: 'AD', number: 7},
    ];
    const handleFecth = ( query: string) => {
        return fetch(`https://api.github.com/search/users?q=${query}`)
        .then(res => res.json())
        .then(({items}) => {
            console.log('item: ', items);
            const formatItems = items.slice(0, 10).map(
                (i: { login: any; }) => ({ value: i.login, ...i})
            );
            console.log('formatItems: ', formatItems);
            return formatItems;
        })
    }
    // const handleFecth = (query: string) => {
    //     return lakers.filter(name => name.includes(query)).map(name =>({
    //         value: name
    //     }));
    // }
    // const handleFecth = (query: string) => {
    //     return lakersWithNumber.filter(player => player.value.includes(query));
    // }
    // const renderOption = (item: DataSourceType<LakerPlayerProps>) => {
    //     return (
    //         <>
    //             <h2>Name: {item.value}</h2>       
    //             <p>Number: {item.number}</p>
    //         </>
    //     ) 
    // }
    const renderOption = (item: DataSourceType<GithubUserProps>) => {
        return (
            <>
                <h2>Name: {item.login}</h2>       
                <p>Url: {item.url}</p>
            </>
        ) 
    }

    return (
        <AutoComplete
            fetchSuggestions={handleFecth}
            onSelect={action('selected')}
            renderOption={renderOption}
        />
    )
}

storiesOf('AutoComplete Component', module)
    .add('AutoComplete', SimpleComplete)