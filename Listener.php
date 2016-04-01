<?php

/*
 * This file is part of a XenForo add-on.
 *
 * (c) Jeremy P <http://xenforo.com/community/members/jeremy-p.450/>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

namespace Jrahmy\ClickableRows;

/**
 * Provides static methods to extend the XenForo API.
 *
 * @author Jeremy P <http://xenforo.com/community/members/jeremy-p.450/>
 */
class Listener
{
    /**
     * Adds filesums to the XenForo File Health Check.
     *
     * @param \XenForo_ControllerAdmin_Abstract $controller The current admin controller
     * @param array                             $hashes     An array of filesums
     */
    public static function fileHealthCheck(
        \XenForo_ControllerAdmin_Abstract $controller,
        array &$hashes
    ) {
        $hashes += FileSums::getHashes();
    }
}
