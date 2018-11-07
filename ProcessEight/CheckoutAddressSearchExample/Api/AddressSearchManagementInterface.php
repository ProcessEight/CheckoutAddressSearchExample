<?php
/**
 * ProcessEight
 *
 * DISCLAIMER
 *
 * Do not edit or add to this file if you wish to upgrade this module to newer
 * versions in the future. If you wish to customize this module for your
 * needs please contact ProcessEight for more information.
 *
 * @category    CheckoutAddressSearchExample
 * @copyright   Copyright (c) 2017 ProcessEight
 * @author      ProcessEight
 *
 */

/**
 * @todo Remove unnecessary logic
 * @todo Update doc blocks
 */

namespace ProcessEight\CheckoutAddressSearchExample\Api;

/**
 * Address Search management service interface.
 *
 * @api
 */
interface AddressSearchManagementInterface
{
    /**
     * Returns information for a coupon in a specified cart.
     *
     * @param string $postcode
     *
     * @return string The coupon code data.
     */
    public function get($postcode);

    /**
     * Adds a coupon by code to a specified cart.
     *
     * @param int    $cartId     The cart ID.
     * @param string $couponCode The coupon code data.
     *
     * @return bool
     * @throws \Magento\Framework\Exception\NoSuchEntityException The specified cart does not exist.
     * @throws \Magento\Framework\Exception\CouldNotSaveException The specified coupon could not be added.
     */
    public function set($cartId, $couponCode);

    /**
     * Deletes a coupon from a specified cart.
     *
     * @param int $cartId The cart ID.
     *
     * @return bool
     * @throws \Magento\Framework\Exception\NoSuchEntityException The specified cart does not exist.
     * @throws \Magento\Framework\Exception\CouldNotDeleteException The specified coupon could not be deleted.
     */
    public function remove($cartId);
}
