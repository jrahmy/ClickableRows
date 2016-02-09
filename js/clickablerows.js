/*
 * This file is part of a XenForo add-on.
 *
 * (c) Jeremy P <http://xenforo.com/community/members/jeremy-p.450/>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */
"use strict";

/**
 * Create the Jrahmy namespace, if it does not already exist.
 *
 * @package Jrahmy
 */
var Jrahmy = Jrahmy || {};

/** @param {jQuery} $ jQuery Object */
(($, window, document, _undefined) =>
{
    /**
     *  Enables clicking of entire list items to open content.
     *
     *  @author Jeremy P <http://xenforo.com/community/members/jeremy-p.450/>
     */
    class ClickableRow
    {
        /**
         * Detect the type of list item, determine the href, and add a click
         * event.
         *
         * @param {jQuery} $rowItem The list item to be clickable
         */
        constructor($rowItem)
        {
            this.$rowItem = $rowItem;

            if (this.$rowItem) {
                this.type = this.getType();
            }

            if (this.type) {
                this.href = this.getHref();
            }

            if (this.href) {
                this.makeClickable();
            }
        }

        /**
         * Determines the type of content shown by the list item.
         *
         * @returns {String} Node|Discussion|Member|SearchResult
         */
        getType()
        {
            if (this.$rowItem.hasClass('discussionListItem')) {
                return 'Discussion';
            }

            if (this.$rowItem.hasClass('memberListItem')) {
                return 'Member';
            }

            if (this.$rowItem.hasClass('node')) {
                return 'Node';
            }

            if (this.$rowItem.hasClass('resourceListItem')) {
                return 'Resource';
            }

            if (this.$rowItem.hasClass('searchResult')) {
                return 'SearchResult';
            }
        }

        /**
         * Determine the href of content shown in the list item.
         *
         * @returns {String} The URL of the list item's content
         */
        getHref()
        {
            let href;

            switch (this.type) {
                case 'Discussion':
                case 'Resource':
                case 'SearchResult':
                    href = this.$rowItem.find('h3.title a').first()
						.attr('href');
                    break;
                case 'Member':
                    href = this.$rowItem.find('h3.username a').last()
                        .attr('href');
                    break;
                case 'Node':
                    href = this.$rowItem.find('h3.nodeTitle a').first()
                        .attr('href');
                    break;
            }

            return href;
        }

        /**
         * Attaches a click event to the list item to open the content.
         */
        makeClickable()
        {
            this.$rowItem.addClass(this.type + 'LinkItemActive');

            let $clickableElement = this.$rowItem;

            if (this.type === 'Node') {
                $clickableElement = this.$rowItem.find('div.nodeInfo').first();
            }

            $clickableElement.click((e) => {
                if (
                    $(e.target).is('a') ||
                    $(e.target).parent().is('a') ||
                    $(e.target).is('input')
                ) {
                        return;
                }

                window.location = XenForo.canonicalizeUrl(this.href);
            });
        }
    }

    /** Assign class to namespace */
    Jrahmy.ClickableRow = ClickableRow;

    // *********************************************************************

    XenForo.register('li.discussionListItem', 'Jrahmy.ClickableRow');
    XenForo.register('li.memberListItem',     'Jrahmy.ClickableRow');
    XenForo.register('li.node',               'Jrahmy.ClickableRow');
    XenForo.register('li.resourceListItem',   'Jrahmy.ClickableRow');
    XenForo.register('li.searchResult',       'Jrahmy.ClickableRow');
})
(jQuery, window, document);
