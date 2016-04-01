<?php

/*
 * This file is part of a XenForo add-on.
 *
 * (c) Jeremy P <https://xenforo.com/community/members/jeremy-p.450/>
 *
 * For the full copyright and license information, please view the LICENSE file
 * that was distributed with this source code.
 */

namespace Jrahmy\ClickableRows;

/**
 * Filesums for XenForo File Health Check.
 *
 * @author Jeremy P <https://xenforo.com/community/members/jeremy-p.450/>
 */
class FileSums
{
    /**
     * Provides an associative array of filenames to hashes.
     *
     * @return array An associative array of filesums
     */
    public static function getHashes()
    {
        return [
                'library/Jrahmy/ClickableRows/Listener.php' => '017692821e1968af3e6cbd3b4a91731b',
                'js/jrahmy/clickablerows.js' => '9421a495a45c213dad40b0d311116b04',

        ];
    }
}
