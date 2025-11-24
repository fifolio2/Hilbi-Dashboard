import { Button } from "antd"

export default function Pagination() {
    // const canGoPrev = 0
    // const canGoNext = 1

    return (
        <div className="tw:flex tw:items-center tw:justify-between">
            <div className="tw:text-sm tw:text-muted-foreground tw:mr-2">
                Page <span className="tw:font-semibold tw:text-foreground">1</span> of{" "}
                <span className="tw:font-semibold tw:text-foreground">123</span>
            </div>

            <div className="tw:flex tw:gap-2">
                <Button
                    onClick={() => { }}
                    // disabled={"DISABLED_PREV"}
                    variant="outlined"
                    className="tw:gap-1"
                >
                    {/* <ChevronLeft className="tw:h-4 tw:w-4" /> */}
                    Previous
                </Button>

                <Button
                    onClick={() => { }}
                    // disabled={"DISABLED_NEXT"}
                    variant="outlined"
                    className="tw:gap-1"
                >
                    Next
                    {/* <ChevronRight className="tw:h-4 tw:w-4" /> */}
                </Button>
            </div>
        </div>

    )
}
