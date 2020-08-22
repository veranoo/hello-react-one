import React, { useEffect, useState } from 'react';
import { Modal } from 'antd';
import { useNavigate } from 'react-router-dom';

export const DetailsModal: React.FC = ({ children }) => {
  const [visible, setVisible] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    return () => {
      setVisible(false);
    };
  }, []);

  return (
    <Modal onCancel={() => navigate(-1)} visible={visible}>
      {children}
    </Modal>
  );
};
