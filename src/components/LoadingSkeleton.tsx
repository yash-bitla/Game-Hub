import { Card, CardBody, Skeleton, SkeletonText } from "@chakra-ui/react";

function LoadingSkeleton() {
  return (
    <>
      <Card borderRadius="10px" overflow="hidden">
        <Skeleton height="280px">
          <CardBody>
            <SkeletonText></SkeletonText>
          </CardBody>
        </Skeleton>
      </Card>
    </>
  );
}
export default LoadingSkeleton;
