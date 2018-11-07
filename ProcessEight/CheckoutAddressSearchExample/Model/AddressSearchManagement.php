<?php

namespace ProcessEight\CheckoutAddressSearchExample\Model;

use Magento\Framework\Exception\CouldNotDeleteException;
use Magento\Framework\Exception\CouldNotSaveException;
use Magento\Framework\Exception\NoSuchEntityException;
use ProcessEight\CheckoutAddressSearchExample\Api\AddressSearchManagementInterface;

/**
 * Address Search management object.
 */
class AddressSearchManagement implements AddressSearchManagementInterface
{
    /**
     * Quote repository.
     *
     * @var \Magento\Quote\Api\CartRepositoryInterface
     */
    protected $quoteRepository;

    /**
     * @todo Remove unnecessary dependencies
     *
     * Constructs a coupon read service object.
     *
     * @param \Magento\Quote\Api\CartRepositoryInterface $quoteRepository Quote repository.
     */
    public function __construct(
        \Magento\Quote\Api\CartRepositoryInterface $quoteRepository
    ) {
        $this->quoteRepository = $quoteRepository;
    }

    /**
     * {@inheritdoc}
     */
    public function get($postcode)
    {
        return 'Submitted value was: ' . $postcode;
    }

    /**
     * @todo Remove this
     *
     * {@inheritdoc}
     */
    public function set($cartId, $couponCode)
    {
        $couponCode = trim($couponCode);
        /** @var  \Magento\Quote\Model\Quote $quote */
        $quote = $this->quoteRepository->getActive($cartId);
        if (!$quote->getItemsCount()) {
            throw new NoSuchEntityException(__('Cart %1 doesn\'t contain products', $cartId));
        }
        $quote->getShippingAddress()->setCollectShippingRates(true);

        try {
            $quote->setCouponCode($couponCode);
            $this->quoteRepository->save($quote->collectTotals());
        } catch (\Exception $e) {
            throw new CouldNotSaveException(__('Could not apply Postcode'));
        }
        if ($quote->getCouponCode() != $couponCode) {
            throw new NoSuchEntityException(__('Postcode is not valid'));
        }
        return true;
    }

    /**
     * @todo Remove this
     *
     * @param int $cartId
     *
     * @return bool
     * @throws \Magento\Framework\Exception\CouldNotDeleteException
     * @throws \Magento\Framework\Exception\NoSuchEntityException
     */
    public function remove($cartId)
    {
        /** @var  \Magento\Quote\Model\Quote $quote */
        $quote = $this->quoteRepository->getActive($cartId);
        if (!$quote->getItemsCount()) {
            throw new NoSuchEntityException(__('Cart %1 doesn\'t contain products', $cartId));
        }
        $quote->getShippingAddress()->setCollectShippingRates(true);
        try {
            $quote->setCouponCode('');
            $this->quoteRepository->save($quote->collectTotals());
        } catch (\Exception $e) {
            throw new CouldNotDeleteException(__('Could not delete Postcode'));
        }
        if ($quote->getCouponCode() != '') {
            throw new CouldNotDeleteException(__('Could not delete Postcode'));
        }
        return true;
    }
}
