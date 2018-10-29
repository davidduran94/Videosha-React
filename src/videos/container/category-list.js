import React, {Component} from 'react';
import {FlatList, Text} from 'react-native';

import Empty from '../../sections/components/Empty';
import Layout from '../../sections/components/category-list-layout';
import Separator from '../../sections/components/vertical-separator';
import SeparatorH from '../../sections/components/horizontal-separator';
import Category  from '../../videos/components/category'

class CategoryList extends Component {
    keyExtractor = (item) => item.id.toString()
    renderEmpty = () =>  <Empty text="No hay sugerencias"></Empty>
    renderSeparator = () =>  <SeparatorH />
    
    renderSuggestions = ({item}) => {
        return (
            <Category {...item} />
        )
    }

    render(){
        return (
            <Layout title="Categorias">
            <FlatList
                horizontal
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


export default CategoryList;