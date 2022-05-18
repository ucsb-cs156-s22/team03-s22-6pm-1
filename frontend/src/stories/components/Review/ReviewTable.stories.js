import React from 'react';

import ReviewTable from "main/components/Review/ReviewTable";
import { reviewFixtures } from 'fixtures/reviewFixtures';

export default {
    title: 'components/Review/ReviewTable',
    component: ReviewTable
};

const Template = (args) => {
    return (
        <ReviewTable {...args} />
    )
};

export const Empty = Template.bind({});

Empty.args = {
    review: []
};

export const ThreeDates = Template.bind({});

ThreeDates.args = {
    review: reviewFixtures.threeReview
};


