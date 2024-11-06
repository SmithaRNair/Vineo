// src/components/SubAndBoxHist.tsx

import React, { useEffect } from 'react';

import { useGetBoxHistoryQuery, useGetSubscriptionStatusMutation } from '../app/redux/apiSlice'; // Adjust the import path based on your file structure

const SubAndBoxHist = () => {
  // Sample payload for BoxHistory
  const boxHistoryPayload = {
    page: 1,
    limit: 10,
  };

  // Hook for fetching box history
  const { data: boxHistoryData, error: boxHistoryError, isLoading: boxHistoryLoading } = useGetBoxHistoryQuery(boxHistoryPayload);

  // Hook for getting subscription status
  const [getSubscriptionStatus, { data: subscriptionData, error: subscriptionError, isLoading: subscriptionLoading }] = useGetSubscriptionStatusMutation();

  // Fetch subscription status on component mount
  useEffect(() => {
    const fetchSubscriptionStatus = async () => {
      try {
        const result = await getSubscriptionStatus().unwrap(); // Call the mutation and unwrap the result
        console.log('Subscription Status:', result.getSubscriptionStatus.status); // Log the result
      } catch (err) {
        console.error('Error fetching subscription status:', err); // Handle errors
      }
    };

    fetchSubscriptionStatus(); // Trigger the function
  }, [getSubscriptionStatus]); // Dependency array ensures the function runs on mount

  // Log box history data to the console
  useEffect(() => {
    if (boxHistoryData) {
      console.log('Box History Data:', boxHistoryData);
    }
  }, [boxHistoryData]);

  // Loading and error handling
  if (boxHistoryLoading || subscriptionLoading) {
    return <div>Loading...</div>;
  }

  if (boxHistoryError) {
    return (
      <div>
        Error fetching box history:
        {boxHistoryError.message}
      </div>
    );
  }

  if (subscriptionError) {
    return (
      <div>
        Error fetching subscription status:
        {subscriptionError.message}
      </div>
    );
  }

  return (
    <div>
      <h2>Box History</h2>
      <p>
        Total Boxes:
        {boxHistoryData.getBoxHistory.box_count}
      </p>
      {/* Render box history details as needed */}
    </div>
  );
};

export default SubAndBoxHist;
