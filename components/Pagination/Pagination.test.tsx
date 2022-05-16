import { render, screen } from '@testing-library/react'
import Pagination from './Pagination'


describe('Pagination Component', () => {

    const setup = (currentPage = 1, totalPages = 10, count = 7) => {
        return render(<Pagination totalPages={totalPages} maxNumOfLinks={count} baseUrl="/page/" currentPage={currentPage} />)
    }

    it("should render noting if total page is one", () => {
        setup(1,1)
        const links = screen.queryAllByRole('link')
        expect(links).toHaveLength(0)
    })

    it('should display 7 pages links', () => {
        setup()
        const links = screen.getAllByTestId("page-link")
        expect(links).toHaveLength(7)
    })

    it('should display first, prev, next and last links with the appropriete href', () => {
        setup()
        const links = screen.getAllByRole('link')
        expect(links).toHaveLength(11)
        expect(links[0].getAttribute("href")).toBe("/page/1")
        expect(links[1].getAttribute("href")).toBe("/page/1")
        expect(links[9].getAttribute("href")).toBe("/page/2")
        expect(links[10].getAttribute("href")).toBe("/page/10")
    })

    it('links in home page are from 1 to 7', () => {
        setup()
        const links = screen.getAllByTestId("page-link")
        expect(links[0].textContent).toEqual('1')
        expect(links[6].textContent).toEqual('7')
    })

    it('links in page 5 are from 2 to 8', () => {
        setup(5)
        const links = screen.getAllByTestId("page-link")
        expect(links[0].textContent).toEqual('2')
        expect(links[6].textContent).toEqual('8')

    })

    it('links in page 7 are from 4 to 10', () => {
        setup(7)
        const links = screen.getAllByTestId("page-link")
        expect(links[0].textContent).toEqual('4')
        expect(links[6].textContent).toEqual('10')

    })
})