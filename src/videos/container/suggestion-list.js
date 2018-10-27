import React, {Component} from 'react';
import {FlatList, Text} from 'react-native';

import Empty from '../../sections/components/Empty';
import Layout from '../../sections/components/suggestion-list-layout';
import Separator from '../../sections/components/vertical-separator';

class SuggestionList extends Component {

    renderEmpty = () =>  <Empty text="No hay sugerencias"></Empty>
    renderSeparator = () =>  <Separator />

    render(){
        const list = [
                { title: 'Avengers', key: '1'},
                { title: 'Dr. Strange',key: '2'}
            ];
        return (
            <Layout title="Recomendado para ti">
            <FlatList
                data={list}
                ListEmptyComponent={this.renderEmpty}
                ItemSeparatorComponent={this.renderSeparator}
                renderItem = { ({item}) => <Text>{item.title}</Text> }
            />
            </Layout>
        )
    }
}


export default SuggestionList;