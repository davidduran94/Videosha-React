import React, {Component} from 'react';
import {FlatList, Text} from 'react-native';

import Empty from '../../sections/components/Empty';
import Layout from '../../sections/components/suggestion-list-layout';
import Separator from '../../sections/components/vertical-separator';
import Suggestion  from '../../videos/components/suggestion'

class SuggestionList extends Component {
    keyExtractor = (item) => item.id.toString()
    renderEmpty = () =>  <Empty text="No hay sugerencias"></Empty>
    renderSeparator = () =>  <Separator />
    
    renderSuggestions = ({item}) => {
        return (
            <Suggestion {...item} />
        )
    }

    render(){
        return (
            <Layout title="Recomendado para ti">
            <FlatList
                keyExtractor = {this.keyExtractor}
                data={this.props.list}
                ListEmptyComponent={this.renderEmpty}
                ItemSeparatorComponent={this.renderSeparator}
                renderItem = { this.renderSuggestions }
            />
            </Layout>
        )
    }
}


export default SuggestionList;