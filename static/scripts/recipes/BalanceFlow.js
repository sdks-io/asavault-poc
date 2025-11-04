async function BalanceFlow(workflowCtx, portal) {
  return {
    Overview: {
      name: "Inroduction",
      stepCallback: async () => {
        return workflowCtx.showContent(`# Balance Flow Overview

This recipe demonstrates how to retrieve and manage balance-related information using our API endpoints. 
Follow these steps to understand how to:

1. **Get Associated Accounts** - Retrieve a list of all accounts linked to the authenticated Consumer
2. **Get Account Details** - Access detailed information for a specific account
3. **Get Net Worth** - Calculate the total net worth across all accounts

## Prerequisites

- Valid API credentials
- Authentication token
- Consumer account with associated financial accounts

## Expected Outcome

By following this recipe, you'll be able to:
- List all associated accounts with their summary information
- Access detailed account information including balances and metadata
- Calculate the overall net worth of a consumer's portfolio

Let's get started with exploring these balance-related endpoints!
        `);
      },
    },
    "Step 1": {
      name: "Get Associated Accounts",
      stepCallback: async () => {
        return workflowCtx.showEndpoint({
          description:
            "This endpoint retrieves a list of accounts associated with the authenticated Consumer, including summary details such as account type, balance, and account status.",
          endpointPermalink: "$e/Balance/Balance%2FAccounts",
          verify: (response, setError) => {
            if (response.StatusCode == 200) {
              return true;
            } else {
              return true;
            }
          },
        });
      },
    },
    "Step 2": {
      name: "Get Account Details",
      stepCallback: async () => {
        return workflowCtx.showEndpoint({
          description:
            "This endpoint returns detailed information for a specific account identified by the provided `AccountId`. This endpoint enables Fintech applications to access comprehensive data about the account, including its current balance, transaction history, account type, and other relevant metadata.",
          endpointPermalink: "$e/Balance/Balance%2FDetails",
          verify: (response, setError) => {
            if (response.StatusCode == 200) {
              return true;
            } else {
              return true;
            }
          },
        });
      },
    },
    "Step 3": {
      name: "Get Net Worth",
      stepCallback: async () => {
        return workflowCtx.showEndpoint({
          endpointPermalink: "$e/Balance/%2FBalance%2FNetWorth",
          verify: (response, setError) => {
            if (response.StatusCode == 200) {
              return true;
            } else {
              return true;
            }
          },
        });
      },
    },
  };
}
