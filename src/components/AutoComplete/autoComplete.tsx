// const a = ['1', 'abc', '']
// console.log('a: ', a);

// interface AutoCompleteProps {
//     // data: string[],
//     fetchSuggestions: (keyword: string, data: string[]) => string[] | Promise<string[]>,
//     onSelect: (item: string) => void,
// }


// const handleChange = (keyword: string, data: string[]) => {
//     return data.filter(item => item.includes(keyword));
//     // return fetch(`url?keyword=${keyword}`);
// }

// const handleSelect = (item: string) => {
//     console.log('item: ', item);
// }

// export default AutoComplete;


import React, { FC, useState, useRef, ChangeEvent, ReactElement, useEffect, KeyboardEvent } from "react";
import classNames from "classnames";
import Input, { InputProps } from "../Input/input";
import Icon from '../Icon/icon';
import Transition from '../Transition/transition';
import useDebounce from '../../hooks/useDebounce';
import useClickOutside from '../../hooks/useClickOutside';

interface DataSourceObject {
    value: string;
    // number: number;
}

export type DataSourceType<T = {}> = T & DataSourceObject


export interface AutoCompleteProps extends Omit<InputProps, 'onSelect'> {
    fetchSuggestions: ( str: string) => DataSourceType[] | Promise<DataSourceType[]>;
    onSelect?: (item: DataSourceType) => void;
    renderOption?: (item: DataSourceType) => ReactElement;
}

export const AutoComplete: FC<AutoCompleteProps> = (props) => {
    const {
        fetchSuggestions,
        onSelect,
        value,
        renderOption,
        ...restProps
    } = props;
    const [ inputValue, setInputValue ] = useState(value as string);
    const [ suggestions, setSuggestions ] = useState<DataSourceType[]>([]);
    const [ showDropdown, setShowDropdown] = useState(false)
    const [ loading, setLoading ] = useState(false);
    const [ highlightIndex, setHighlightIndex ] = useState(-1);
    const triggerSearch = useRef(false);
    const componentRef = useRef<HTMLDivElement>(null);
    const debounceValue = useDebounce(inputValue, 500);
    useClickOutside( componentRef, ()=>{
        setSuggestions([])
    })
    useEffect(()=>{
        if(debounceValue && triggerSearch.current){
            const results = fetchSuggestions(debounceValue);
            if(results instanceof Promise){
                console.log('results-triggered', results);
                setLoading(true);
                results.then(data => {
                    setLoading(false);
                    setSuggestions(data);
                    if (data.length > 0) {
                        setShowDropdown(true)
                      }
                })
            } else {
                setSuggestions(results);
                setShowDropdown(true)
                if (results.length > 0) {
                  setShowDropdown(true)
                } 
            }
        } else {
            setShowDropdown(false)
            // setSuggestions([]);
        }
        setHighlightIndex(-1)
    }, [debounceValue]);
    console.log('suggestions: ', suggestions);

    const highlight = (index: number) => {
        console.log('index: ', index);
        if(index < 0) index = 0
        if(index >= suggestions.length) {
            index = suggestions.length -1;
        }
        setHighlightIndex(index);
    }

    const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
        console.log(e.key);
        switch(e.key){
            case 'Enter': //Enter
                if(suggestions[highlightIndex]){
                    handleSelect(suggestions[highlightIndex])
                }
               break;
            case 'ArrowUp': //向上
                highlight(highlightIndex -1)
                break;
            case 'ArrowDown'://向下
                highlight(highlightIndex +1)
                break;
            case 'Backspace'://删除
                // setSuggestions([])
                setShowDropdown(false)
                break;
            default:
                break;
        }
    }

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value.trim();
        setInputValue(value);
        triggerSearch.current = true;
        // if(value){
        //     const results = fetchSuggestions(value);
        //     if(results instanceof Promise){
        //         console.log('results-triggered', results);
        //         setLoading(true);
        //         results.then(data => {
        //             setLoading(false);
        //             setSuggestions(data);
        //         })
        //     } else {
        //         setSuggestions(results);
        //     }
        // } else {
        //     setSuggestions([]);
        // }
    }

    const handleSelect = (item: DataSourceType) => {
        setInputValue(item.value);
        // setSuggestions([]);
        setShowDropdown(false)
        if(onSelect) {
            onSelect(item);
        }
        triggerSearch.current = false;
    }

    const renderTemplate = (item: DataSourceType) => {
        return renderOption ? renderOption(item) : item.value;
    }

    const generateDropdown = () => {
        return (
            <ul>
                { suggestions.map((item, index)=> {
                    const cnames = classNames('suggestion-item', {
                        'item-highlighted': index === highlightIndex
                    })
                    return(
                        <li 
                            key={index}
                            onClick={()=> handleSelect(item)}
                            className={cnames}
                        >
                            {/* {item} */}
                            {renderTemplate(item)}
                        </li>
                    )
                })}
            </ul>
        )
    }
    return (
        /* Transition添加动画效果 */
        <Transition
            in={showDropdown || loading}
            animation="zoom-in-top"
            timeout={300}
            onExited={() => {setSuggestions([])}}
        >
            <div className="rich-auto-complete" ref={componentRef}>
                <Input 
                    value={inputValue}
                    onChange={handleChange}
                    onKeyDown={handleKeyDown}
                    {...restProps}
                />
                { loading && <ul><Icon icon="spinner" spin/></ul>}
                {(suggestions.length > 0) && generateDropdown() }
            </div>
        </Transition>
    )
}