import React, { useEffect } from 'react'
import usePlans from '../../hooks/usePlans';
import Header from '../../components/Header';
import Informational from '../../components/Informational';
import PlanSelection from '../../components/PlanSelection';

export default function Home() {
  const {fetchPlans} = usePlans();

  useEffect(() => {
    fetchPlans();
  }, [fetchPlans])

  return (
    <div className="d-flex flex-column flex-base">
      <Header />
      <Informational />
      <PlanSelection />
    </div>
  )
}
