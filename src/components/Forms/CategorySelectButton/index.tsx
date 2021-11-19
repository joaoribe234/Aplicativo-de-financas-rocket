import React from "react";
import { Container, Category, Icon} from './styles';
import { Feather } from '@expo/vector-icons';

interface Props { 
    title: string;
    onPress: () => void;
 }

export function CategorySelectButton({ title, onPress}: Props){ 
    return(
        <Container onPress={onPress}> 
        <Category>{title}</Category>
        <Icon name='chevron-down' />
        </Container>
    );
 }