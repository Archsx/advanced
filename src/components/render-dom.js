export default {
  functional: true,
  props: {
    number: Number,
    renderFunc: Function
  },
  render: (h, ctx) => { // ctx指代当前实例
    return ctx.props.renderFunc(h, ctx.props.number) // 这里我觉得好奇怪，怎么name这个参数这样写，不应该ctx.pros.name?是
  }
}
