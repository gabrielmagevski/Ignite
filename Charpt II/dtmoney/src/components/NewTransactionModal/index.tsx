import Modal from 'react-modal';
import { Container, TransactionTypeContainer, RadioBox } from './style';

import closeImg from '../../assets/close.svg';
import incomeImg from '../../assets/income.svg';
import outcomeImg from '../../assets/outcome.svg';
import { FormEvent, useState } from 'react';
import { api } from './../../services/api';


interface NewTransactionModalProps {
    isOpen: boolean;
    onRequestClose: () => void;
}


export function NewTransactionModal({ isOpen, onRequestClose }: NewTransactionModalProps) {

    const [title, setTitle] = useState('');
    const [number, setNumber] = useState(0);
    const [type, setType] = useState('deposit')
    const [category, setCategory] = useState('');

    
    function handleSendNewTransaction(event: FormEvent) {
        event.preventDefault()

        const data = {
            title, 
            number,
            type, 
            category 
        };
        
        
        setTitle('')
        setNumber(0)
        setCategory('')
        
        api.post('/transactions', data);
    }

    return (
        <>
            <Modal
                isOpen={isOpen}
                onRequestClose={onRequestClose}
                overlayClassName="react-modal-overlay"
                className="react-modal-content"
            >
                <button
                    type="button"
                    onClick={onRequestClose}
                    className="react-modal-close">
                    <img src={closeImg} alt="Close button" />
                </button>

                <Container onSubmit={handleSendNewTransaction}>
                    <h2>Cadastrar transação</h2>

                    <input
                        placeholder="Título"
                        value={title}
                        onChange={event => setTitle(event.target.value)}
                    />

                    <input
                        type="number"
                        placeholder="Valor"
                        value={number}
                        onChange={event => setNumber(Number(event.target.value))}
                    />

                    <TransactionTypeContainer>
                        <RadioBox
                            type="button"
                            onClick={() => { setType('deposit'); }}
                            isActive={type === 'deposit'}
                            colorActive="green"

                        >
                            <img src={incomeImg} alt="Entradas" />
                            <span>Entrada</span>
                        </RadioBox>

                        <RadioBox
                            type="button"
                            onClick={() => { setType('withdraw'); }}
                            isActive={type === 'withdraw'}
                            colorActive="red"
                        >
                        
                            <img src={outcomeImg} alt="Saídas" />
                            <span>Saída</span>
                        </RadioBox>
                        
                    </TransactionTypeContainer>


                    <input
                        placeholder="Categoria"
                        value={category}
                        onChange={event => setCategory(event.target.value)}
                    />

                    <button type="submit">Cadastrar</button>
                </Container>
            </Modal>
        </>
    )
}