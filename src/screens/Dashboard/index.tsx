import React from 'react';
import { HighlightCard } from '../../components/HighlightCard';
import { TransactionCard, TransactionCardProps} from '../../components/TransactionCard';
import { Container, Header, UserInfo, User, UserGreeting, Photo, UserName, UserWrapper, HighlightCards, Transactions, Title, TransactionList, LogoutButton} from './styles';
import { Icon } from './styles';

export interface DataListProps extends TransactionCardProps { 
    id: string;
 }

export function Dashboard (){
   
   const data: DataListProps[] = [{ 
    id:'1',type:'positive', title:'Desenvolvimento de site', amount: 'R$ 1.125,00', 
    category:{name: 'Vendas', icon: 'dollar-sign'}, date:'16/11/2021',
    },
    { 
        id:'2',type:'negative', title:'Superburguer', amount: 'R$ R$ 17,00', 
        category:{name: 'Alimentação', icon: 'coffee'}, date:'14/11/2021',
        },
        { 
            id:'3',type:'negative', title:'Aluguel do apartamento', amount: 'R$ 250,00', 
            category:{name: 'Aluguel', icon: 'shopping-bag'}, date:'16/11/2021',
            }];

    return (
        <Container>
        <Header>
        <UserWrapper>
        <UserInfo>
         <Photo source={{ uri: 'https://avatars.githubusercontent.com/u/90562622?v=4' }} />
         <User>
         <UserGreeting>Olá, </UserGreeting>
         <UserName>João Vitor Ribeiro</UserName>
         </User>
        </UserInfo>
        <LogoutButton onPress={() => {} } >
        <Icon name='power'/> 
        </LogoutButton>
        </UserWrapper>
        </Header>

        <HighlightCards  >
        <HighlightCard title= 'Entradas' amount= 'R$1.125,00' lastTransaction= 'Última entrada dia 13 de novembro' type='up' /> 
        <HighlightCard title= 'Saídas' amount= 'R$267,00' lastTransaction= 'Última saída dia 15 de novembro' type= 'down' /> 
        <HighlightCard title= 'Total' amount= 'R$858,00' lastTransaction= '01 á 30 de Novembro'  type='total'/>
        </HighlightCards>

        <Transactions>
            <Title>Listagem</Title>

            <TransactionList 
            data={data}
            keyExtractor={ item => item.id }
            renderItem={ ({ item })  => <TransactionCard data={ item } />}
            />

        </Transactions>

        </Container>
    )
}

