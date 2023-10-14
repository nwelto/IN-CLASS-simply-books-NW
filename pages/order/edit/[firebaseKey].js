import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import OrderForm from '../../../components/forms/OrderForm';
import { getSingleBookOrder } from '../../../api/orderBookData';

export default function EditOrder() {
  const [editItem, setEditItem] = useState({});
  const router = useRouter();

  const { firebaseKey } = router.query;

  useEffect(() => {
    getSingleBookOrder(firebaseKey).then(setEditItem);
  }, [firebaseKey]);

  return (<OrderForm obj={editItem} />);
}
