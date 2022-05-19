import React from 'react';

import RecommendationTable from "main/components/Recommendation/RecommendationTable";
import { recommendationFixtures } from 'fixtures/recommendationFixtures';

export default {
    title: 'components/Recommendation/RecommendationTable',
    component: RecommendationTable
};

const Template = (args) => {
    return (
        <RecommendationTable {...args} />
    )
};

export const Empty = Template.bind({});

Empty.args = {
    recommendation: []
};

export const ThreeDates = Template.bind({});

ThreeDates.args = {
    recommendation: recommendationFixtures.threeRecommendation
};


