import React from 'react';
import { FiAlertCircle } from 'react-icons/fi';

// styles
import { Container } from './styles';

interface TooltipProps {
  title: string;
  isError?: boolean;
}

const Tooltip: React.FC<TooltipProps> = ({ title, isError = false }) => {
  return (
    <Container isErrored={isError}>
      <FiAlertCircle size={20} />
      <span>{title}</span>
    </Container>
  );
};

export default Tooltip;
