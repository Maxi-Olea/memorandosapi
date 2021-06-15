module.exports = {
    messages: {
      auth: {
        permission: "You don't have permission to access."
      }
    },
    regex: {
      email: /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/,
      url: /^((http)(s)?:\/\/)?[a-zA-Z0-9.\-_]*\.([a-zA-Z-0-9()/+_!%&=]+)$/
    },
    app: {
      headerRequestId: 'X-Request-ID',
      defaultLanguage: 'English',
      headerLanguage: 'Language',
      dateFormat: 'dd/mm/yyyy'
    },
    userLang: {
      english: 'en',
      arabic: 'ar'
    },
    emirates: [
      {
        name: 'Abu Dhabi',
        code: 'AZ',
        standardRate: 'AUH',
        daysEnabledForShipping: {
          0: 'Sunday',
          1: 'Monday',
          2: 'Tuesday',
          3: 'Wednesday',
          4: 'Thursday',
          5: false,
          6: 'Saturday'
        }
      },
      {
        name: 'Ajman',
        code: 'AJ',
        standardRate: 'AJM',
        daysEnabledForShipping: {
          0: 'Sunday',
          1: 'Monday',
          2: 'Tuesday',
          3: 'Wednesday',
          4: 'Thursday',
          5: false,
          6: 'Saturday'
        }
      },
      {
        name: 'Dubai',
        code: 'DU',
        standardRate: 'DXB',
        daysEnabledForShipping: {
          0: 'Sunday',
          1: 'Monday',
          2: 'Tuesday',
          3: 'Wednesday',
          4: 'Thursday',
          5: false,
          6: 'Saturday'
        }
      },
      {
        name: 'Fujairah',
        code: 'FU',
        standardRate: 'FUJ',
        daysEnabledForShipping: {
          0: 'Sunday',
          1: 'Monday',
          2: 'Tuesday',
          3: 'Wednesday',
          4: 'Thursday',
          5: false,
          6: 'Saturday'
        }
      },
      {
        name: 'Ras al-Khaimah',
        code: 'RK',
        standardRate: 'RAK',
        daysEnabledForShipping: {
          0: 'Sunday',
          1: 'Monday',
          2: 'Tuesday',
          3: 'Wednesday',
          4: 'Thursday',
          5: false,
          6: 'Saturday'
        }
      },
      {
        name: 'Sharjah',
        code: 'SH',
        standardRate: 'SHJ',
        daysEnabledForShipping: {
          0: 'Sunday',
          1: 'Monday',
          2: 'Tuesday',
          3: 'Wednesday',
          4: 'Thursday',
          5: false,
          6: 'Saturday'
        }
      },
      {
        name: 'Umm al-Quwain',
        code: 'UQ',
        standardRate: 'UAQ',
        daysEnabledForShipping: {
          0: 'Sunday',
          1: 'Monday',
          2: 'Tuesday',
          3: 'Wednesday',
          4: 'Thursday',
          5: false,
          6: 'Saturday'
        }
      }
    ],
    redis: {
      DIAPERS_PRODUCTS: {
        KEY: 'diapers-products',
        TTL: 0 // Unlimited
      },
      DIAPERS_WIPES_PRODUCTS: {
        KEY: 'diapers-wipes-products',
        TTL: 0 // Unlimited
      },
      HIDDEN_PRODUCTS: {
        KEY: 'hidden-products',
        TTL: 86400 // 24 Hour
      },
      ALL_PRODUCTS: {
        KEY: 'all-products',
        TTL: 0 // Unlimited
      },
      AVAILABLE_PRODUCTS: {
        KEY: 'available-products',
        TTL: 0 // Unlimited
      },
      BABY_STAGE_INFO: {
        KEY: 'baby-stage-info',
        TTL: 0 // Unlimited
      },
      PRICE_RULES: {
        KEY: 'price-rules',
        TTL: 900 // 15 Minutes
      },
      PRODUCT_STOCK: {
        KEY: 'product-stock',
        TTL: 0 // Unlimited
      }
    },
    financial: {
      vatPercent: 5
    },
    discount: {
      status: {
        active: 'ACTIVE',
        canceled: 'CANCELED'
      },
      applyTo: {
        entireOrder: 'ENTIRE_ORDER',
        collection: 'COLLECTION',
        product: 'PRODUCT'
      },
      type: {
        percentage: 'PERCENTAGE',
        fixedAmount: 'FIXED_AMOUNT'
      },
      toInfluencer: 'influ',
      toGift: 'gift'
    },
    babyBox: {
      boxKey: 'Baby Box',
      babyBoxPurchaseType: {
        subscription: 'SUBSCRIPTION',
        oneTime: 'ONE_TIME'
      },
      paymentStatus: {
        notPaid: 'NOT_PAID',
        paid: 'PAID',
        refunded: 'REFUNDED'
      },
      babyBoxStatus: {
        pending: 'PENDING',
        paused: 'PAUSED',
        canceled: 'CANCELED',
        tempCanceled: 'TEMP_CANCELED',
        inProcess: 'IN_PROCESS',
        processed: 'PROCESSED',
        onHold: 'ON_HOLD'
      },
      minimumPriceToCreateOrder: 150,
      lessDiapersAdmittedInBabyBox: 0,
      lowMarginDiapersAdmittedInBabyBox: 10,
      highMarginDiapersAdmittedInBabyBox: 30,
      monthlyPercentageOfDiapers: [100, 60, 30]
    },
    subscription: {
      subscribedDiscountPercent: 10,
      reward: {
        3: { amount: 100, discountCode: 'LOYALTY1' }, // Win AED 100 + samples and gifts, when 3 subscribed boxes are delivered
        6: { amount: 300, discountCode: 'LOYALTY2' }, // Win AED 300 + samples and gifts, when 6 subscribed boxes are delivered
        9: { amount: 500, discountCode: 'LOYALTY3' }, // Win AED 500 + samples and gifts, when 9 subscribed boxes are delivered
        12: { amount: 500, discountCode: 'LOYALTY4' }, // Win AED 500 + samples and gifts, when 12 subscribed boxes are delivered
        15: { amount: 500, discountCode: 'LOYALTY5' }, // Win AED 500 + samples and gifts, when 15 subscribed boxes are delivered
        18: { amount: 500, discountCode: 'LOYALTY6' }, // Win AED 500 + samples and gifts, when 18 subscribed boxes are delivered
        21: { amount: 500, discountCode: 'LOYALTY7' }, // Win AED 500 + samples and gifts, when 21 subscribed boxes are delivered
        24: { amount: 500, discountCode: 'LOYALTY8' } // Win AED 500 + samples and gifts, when 24 subscribed boxes are delivered
      }
    },
    productType: {
      diapers: 'diapers',
      babyWipes: 'baby wipes',
      hiddenProducts: 'hidden',
      addOns: 'addOns'
    },
    productStatus: {
      any: 'any',
      available: 'published',
      unavailable: 'unpublished'
    },
    variantStatus: {
      available: 'continue'
    },
    welcomeNote: 'welcome note',
    hiddenProductType: {
      gift: 'gift',
      voucher: 'voucher',
      sample: 'sampling'
    },
    baby: {
      hasAllergiesKey: 'allergy',
      unisexGender: 'U'
    },
    currency: 'AED',
    klaviyo: {
      events: {
        boxPurchase: 'Box Purchase',
        boxPaused: 'Box Paused',
        boxPausedByInternalProcess: 'Box Paused By Internal Process',
        boxCanceled: 'Box Canceled',
        boxUpdated: 'Box Updated',
        boxPaid: 'Box Paid',
        boxPaymentFailed: 'Box Payment Failed',
        boxIssue: 'Box Issue',
        boxSubscriptionReward: 'Box Subscription Reward',
        upcomingBoxAlert: 'Upcoming Box Alert',
        smsIssue: 'SMS Issue',
        recoveryPassword: 'Recovery Password',
        publicPayment: 'Public Payment',
        internalIssue: 'Internal Issue',
        productsWithLowStock: 'Products With Low Stock',
        cardExpiration: 'Card Expiration'
      }
    },
    googleAnalytics: {
      events: {
        newBoxCloned: {
          category: 'enhancedEcommerce',
          action: 'transaction',
          documentLocation: encodeURIComponent('https://kabsa.yallababy.com'),
          label: 'boxPrice'
        }
      }
    },
    checkout: {
      roundValue: 100,
      status: {
        cardVerifiedSuccess: 'Card Verified',
        paymentAuthorisedSuccess: 'Authorised',
        paymentRefundedSuccess: 'Refunded'
      }
    },
    passwordRecovery: {
      url: '/account/changepassword'
    },
    paymentType: {
      public: 'PUBLIC',
      creditCard: 'CREDIT',
      cashOnDelivery: 'COD'
    },
    cashOnDelivery: {
      percent: 10,
      titleInOrder: 'Cash on delivery'
    },
    hooks: {
      charge: {
        succeeded: 'charge.succeeded',
        failed: 'charge.failed',
        captured: 'charge.captured',
        capturedFailed: 'charge.captured.failed',
        refunded: 'charge.refunded',
        refundedFailed: 'charge.refunded.failed',
        voided: 'charge.voided',
        voidedFailed: 'charge.voided.failed',
        retrieval: 'charge.retrieval',
        chargeback: 'charge.chargeback',
        captureDeffered: 'charge.captured.deferred',
        pending: 'charge.pending'
      }
    },
    audit: {
      payment: {
        status: {
          init: 'INIT',
          payOk: 'PAY_OK',
          payError: 'PAY_ERROR',
          payException: 'PAY_EXCEPTION'
        }
      }
    },
    mimeTypes: [
      {
        extension: '.xlsx',
        value: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'
      },
      {
        extension: '.zip',
        value: 'application/zip'
      }
    ],
    months: [
      'january',
      'february',
      'march',
      'april',
      'may',
      'june',
      'july',
      'august',
      'september',
      'october',
      'november',
      'december'
    ],
    daysToControlStock: 5,
    upcomingBoxAlert: {
      byEmail: {
        firstReminder: 7, // 7 days before shipment
        lastReminder: 3
      },
      bySms: 4 // 4 days before shipment
    },
    verificationCodeExpiration: {
      toUpdateCustomerPhone: 300000 // 5 minutes
    }
  }
  