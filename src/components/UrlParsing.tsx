
function UrlParsing() {
  return (
    <div className="bg-white p-3 pt-2 h-full rounded-lg">
        <div className="flex justify-center h-full border-4 border-black rounded-lg">
            <div className="text-black font-bold text-4xl pt-10 w-full p-2">
                <div className=" flex justify-center ">
                    <form action="to_handle_url_inut">
                        <label htmlFor="url_box" className="">
                            <div className="flex justify-center">
                                Enter URL to Summarize
                            </div>
                            <div className="flex justify-between items-center space-x-5 pt-5">
                                <input type="text" name="urlbox" id="url_box" placeholder="URL..." className="text-xl outline-3 text-black rounded-2xl w-150 p-2 pl-5 "/>
                                <button type="submit" value={'submit'} className="text-xl bg-black text-white rounded-4xl p-2 px-8 hover:bg-white hover:text-black border-3">Submit</button>
                                <button type="reset" value={'reset'} className="text-xl bg-black text-white rounded-4xl p-2 px-10 hover:bg-white hover:text-black border-3">Reset</button>
                            </div>
                        </label>
                    </form>
                </div>
            </div>
        </div>
    </div>
  )
}

export default UrlParsing