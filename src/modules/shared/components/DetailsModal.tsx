import React, { useEffect, useState } from 'react';
import { Modal } from 'antd';
import { PageProps } from '../interfaces/PageProps';

export const DetailsModal: React.FC<PageProps<{ input: React.FC }>> = ({
  data,
  ...rest
}) => {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    return () => {
      setVisible(false);
    };
  }, []);

  return (
    <Modal onCancel={() => rest.history.goBack()} visible={visible}>
      {data?.input({
        ...rest
      })}
    </Modal>
  );
};
