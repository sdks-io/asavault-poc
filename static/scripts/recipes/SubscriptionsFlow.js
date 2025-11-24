async function SubscriptionsFlow(workflowCtx, portal) {
  return {
    Overview: {
      name: "Introduction",
      stepCallback: async () => {
        return workflowCtx.showContent(
          "## Subscriptions Flow\n\nThis workflow guides you through the key endpoints related to subscription management within the ASAOpen API. You will explore how to retrieve subscription plans, view active subscriptions, and cancel a subscription.\n\n### Steps Included:\n\n1. **Get Subscription Plans**: Learn how to retrieve available subscription plans.\n2. **Get Active Subscriptions**: Discover how to view active subscriptions for a consumer.\n3. **Cancel a Subscription**: Understand the process of canceling a subscription.\n\nFollow each step to understand the functionality and usage of these endpoints in managing subscriptions effectively.",
        );
      },
    },
    "Step 1": {
      name: "Get Subscription Plans",
      stepCallback: async () => {
        return workflowCtx.showEndpoint({
          description:
            "Retrieves a list of available subscription plans. This endpoint provides details on different subscription options that Fintech can choose from.",
          endpointPermalink: "$e/Subscriptions/SubscriptionPlans",
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
      name: "Get Active Subscriptions",
      stepCallback: async () => {
        return workflowCtx.showEndpoint({
          description:
            "Retrieves a list of active subscriptions for a consumer. This endpoint provides details on current subscriptions including their status, plan details, and start dates.",
          endpointPermalink: "$e/Subscriptions/Subscriptions",
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
      name: "Cancel a Subscription",
      stepCallback: async () => {
        return workflowCtx.showEndpoint({
          description:
            'The ASAOpen API provides endpoints to manage subscription cancellations for both Monthly and Yearly plans. This document details the cancellation process, expected responses, and system behavior.\n\n**Request Headers:**\n\n```\n{\n  "Authorization": "Bearer <token>",\n  "Content-Type": "application/json"\n}\n\n ```\n\n**Request Body:**\n\n```\n{\n  "userId": "string",  \n  "subscriptionId": "string"\n}\n\n ```\n\nIf the `SubscriptionEndDate` is in the future:\n\n1. The system stops recurring payments immediately.\n    \n2. The subscription remains active until the `SubscriptionEndDate`.\n    \n3. A background process will automatically terminate the subscription on the `SubscriptionEndDate`.\n    \n4. Refunds are not issued as part of the cancellation process.\n    \n\n## Notes\n\n- Users can continue using the subscription until the `SubscriptionEndDate`.\n    \n- Once the subscription reaches its end date, access will be revoked automatically.\n    \n\n### Response\n\nThe response for this request is a JSON object representing the schema of the data returned. Below is an example of the JSON schema for the response:\n\n``` json\n{\n  "type": "object",\n  "properties": {\n    "status": {\n      "type": "string",\n      "description": "The status of the cancellation request"\n    },\n    "message": {\n      "type": "string",\n      "description": "A message providing additional information about the cancellation status"\n    }\n  }\n}\n\n ```\n\nThis JSON schema outlines the structure of the response object, including the `status` and `message` properties.',
          endpointPermalink: "$e/Subscriptions/CancelSubscription",
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
