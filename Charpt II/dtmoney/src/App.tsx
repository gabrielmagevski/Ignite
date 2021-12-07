import { useState } from "react";

import Modal from 'react-modal';
import { TransactionsProvider } from "./TransactionsContext";

import { Header } from "./components/Header";
import { Dashboard } from "./components/Dashboard";
import { NewTransactionModal } from "./components/NewTransactionModal";

import { GlobalStyle } from "./styles/global";

Modal.setAppElement('#root')

export function App() {
  const [isNewOpenModalTransaction, setIsNewOpenModalTransaction] = useState(false);

  function handleOpenModalTransaction() {
    setIsNewOpenModalTransaction(true);
  }

  function handleCloseModalTransaction() {
    setIsNewOpenModalTransaction(false);
  }

  return (

    <TransactionsProvider>
      <GlobalStyle />

      <Header onOpenNewTransactionModal={handleOpenModalTransaction} />

      <Dashboard />

      <NewTransactionModal
        isOpen={isNewOpenModalTransaction}
        onRequestClose={handleCloseModalTransaction}
      />
    </TransactionsProvider>
  );
}


